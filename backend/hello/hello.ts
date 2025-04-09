import { api } from "encore.dev/api";
import prisma from "../config/database";

export const get = api(
  { expose: true, method: "GET", path: "/hello/:name" },
  async ({ name }: { name: string }): Promise<{ message: string }> => {
    const msg = `Hello ${name}!`;
    return { message: msg };
  }
);

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const getTasks = api(
  { expose: true, method: "GET", path: "/tasks" },
  async (): Promise<{ tasks: Task[] }> => {
    const tasks = await prisma.task.findMany();
    return { tasks };
  }
);

export const createTask = api(
  { expose: true, method: "POST", path: "/tasks" },
  async ({ title }: { title: string }): Promise<Task> => {
    const task = await prisma.task.create({ data: { title } });
    return task;
  }
);

export const updateTask = api(
  { expose: true, method: "PUT", path: "/tasks/:id" },
  async ({ id, title, completed }: { id: number; title: string; completed: boolean }): Promise<Task> => {
    const task = await prisma.task.update({ where: { id }, data: { title, completed } });
    return task;
  }
);

export const deleteTask = api(
  { expose: true, method: "DELETE", path: "/tasks/:id" },
  async ({ id }: { id: number }): Promise<void> => {
    await prisma.task.delete({ where: { id } });
  }
);