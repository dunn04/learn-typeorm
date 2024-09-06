import { DataSource } from "typeorm";
import { TodoViewEntity } from "./entities/todo-view.entity";

const source = new DataSource({
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "dunn",
  database: "todo_app",
  entities: ["src/entities/*.{ts,js}"],
});

source
  .initialize()
  .catch(console.log)
  .then(async () => {
    const todoRepo = source.getRepository(TodoViewEntity);
    const todos = await todoRepo.find();
    console.log(todos);
  })
  .finally(() => {
    source.destroy();
  });
