import { JoinColumn, ManyToOne, ViewColumn, ViewEntity } from "typeorm";
import { UserEntity } from "./user.entity";
import { TodoEntity } from "./todo.entity";

@ViewEntity({
  name: "todos_author_view",
  // expression: (connection) =>
  //   connection
  //     .createQueryBuilder()
  //     .select("todo.id", "id")
  //     .addSelect("todo.title", "title")
  //     .addSelect("todo.description", "description")
  //     .addSelect("todo.status", "status")
  //     .addSelect("users.username", "author")
  //     .from(TodoEntity, "todo")
  //     .leftJoin(UserEntity, "users", "users.id = todo.user_id"),
})
export class TodoViewEntity {
  @ViewColumn()
  id!: number;
  @ViewColumn()
  title!: string;
  @ViewColumn()
  description!: string;
  @ViewColumn()
  author!: string;
}
