import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({
    unique: true,
  })
  username!: string;
  @Column()
  password!: string;
  @Column()
  email!: string;
  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;
}
