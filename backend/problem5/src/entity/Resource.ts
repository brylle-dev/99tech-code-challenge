import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Length, IsOptional } from "class-validator";

@Entity()
export class Resource {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @Length(1, 255)
  name!: string;

  @Column({ type: "text", nullable: true })
  @IsOptional()
  description?: string;

  @CreateDateColumn({ type: "datetime" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "datetime" })
  updatedAt!: Date;
}
