import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("todos")
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  title!: string;
  @Column()
  description!: string;
  @Column()
  status!: string;
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: "user_id" })
  author!: UserEntity;
}
