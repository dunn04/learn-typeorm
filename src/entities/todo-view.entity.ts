import { ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
  name: "todos",
  expression: (connection) =>
    connection
      .createQueryBuilder()
      .select("todo.id", "id")
      .addSelect("todo.title", "title")
      .addSelect("todo.description", "description")
      .addSelect("todo.status", "status")
      .addSelect("users.username", "author")
      .from("todos", "todo")
      .leftJoin("users", "users", "users.id = todo.user_id"),
})
export class TodoViewEntity {
  @ViewColumn()
  id!: number;
  @ViewColumn()
  title!: string;
  @ViewColumn()
  description!: string;
  @ViewColumn()
  status!: string;
  @ViewColumn()
  author!: string;
}
