import { ITask, ITaskAdd } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const fetchTasks = async (): Promise<ITask[]> => {
  const response = await fetch(baseUrl + "/tasks", { cache: "no-store" });
  const todos = await response.json();
  return todos;
};

export const addTask = async (task: ITaskAdd): Promise<ITaskAdd> => {
  const response = await fetch(baseUrl + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  return newTask;
};

export const editTask = async (task: ITask): Promise<ITask> => {
  const response = await fetch(baseUrl + "/tasks/" + task?.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const updatedTask = await response.json();
  return updatedTask;
};

export const deleteTask = async (id: number): Promise<void> => {
  await fetch(baseUrl + "/tasks/" + id, {
    method: "DELETE",
  });
};
