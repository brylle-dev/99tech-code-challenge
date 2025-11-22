import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Resource } from "../entity/Resource";
import { validate } from "class-validator";

const repo = () => AppDataSource.getRepository(Resource);

export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = repo().create({ name, description });

    const errors = await validate(resource);

    if (errors.length > 0) {
      return res.status(400).json(errors);
    }

    const savedResource = await repo().save(resource);
    res.status(201).json(savedResource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const listResources = async (req: Request, res: Response) => {
  try {
    const { name, limit = "10", offset = "0" } = req.query;
    const queryBuild = repo().createQueryBuilder("resource");

    if (name) {
      queryBuild.where("resource.name LIKE :name", { name: `%${name}%` });
    }

    queryBuild
      .take(Number(limit))
      .skip(Number(offset))
      .orderBy("resource.createdAt", "DESC");

    const [items, count] = await queryBuild.getManyAndCount();
    return res.json({ items, count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const found = await repo().findOneBy({ id });
    if (!found) return res.status(404).json({ message: "Not found" });
    return res.json(found);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const resource = await repo().findOneBy({ id });
    if (!resource) return res.status(404).json({ message: "Not found" });

    resource.name = name ?? resource.name;
    resource.description = description ?? resource.description;

    const errors = await validate(resource);
    if (errors.length > 0) return res.status(400).json({ errors });

    const saved = await repo().save(resource);
    return res.json(saved);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resource = await repo().findOneBy({ id });
    if (!resource) return res.status(404).json({ message: "Not found" });

    await repo().remove(resource);
    return res.status(204).json({
      status: "ok",
      message: "Resource deleted successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
