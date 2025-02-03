import { TaskTable } from "./todo/TaskTable";
import { TaskInputModal } from "./todo/TaskInputModal";
import { useState, useEffect } from "react";
// import { Overlay } from "./utils/Overlay";

export function Todo() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks);
  }, []);

  return (
    <main className="flex h-dvh w-dvw justify-center pt-10">
      <div className="relative flex w-2/3 flex-col">
        <div>
          <h1 className="text-4xl font-semibold">todoit tasks!</h1>
          <p className="text-gray-600">
            Make sure to finish all your task today!
          </p>
        </div>
        <div className="my-3 flex justify-between">
          <input
            className="rounded-md px-2 py-1 text-sm outline outline-gray-300"
            placeholder="Filter task..."
            type="text"
          />
          <button
            onClick={() => setOpenModal(true)}
            className="cursor-pointer rounded-md bg-black px-4 py-1.5 text-white hover:shadow-md"
          >
            <span className="px-1 font-bold text-white">+</span>Add task
          </button>
        </div>
        <TaskTable tasks={tasks} />
        <TaskInputModal
          isOpen={isOpenModal}
          onClose={() => setOpenModal(false)}
          onTaskSubmit={setTasks}
        />
      </div>
    </main>
  );
}
