import { Router } from "express";
import {
  createResource,
  listResources,
  getResource,
  updateResource,
  deleteResource,
} from "../controllers/resource.controller";

const router = Router();

router
  .route("/")
  .get(listResources) // Get list of resources
  .post(createResource); // Create a new resource

router
  .route("/:id")
  .get(getResource) // Get a specific resource by ID
  .put(updateResource) // Update a specific resource by ID
  .delete(deleteResource); // Delete a specific resource by ID

export default router;
