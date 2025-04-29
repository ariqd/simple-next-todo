import { fetchTasks } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await fetchTasks();

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen">
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Simple to-do app</h1>
        <AddTask />
      </div>

      <TodoList tasks={tasks} />
    </div>
  );
}
