import { TaskTable } from "./todo/TaskTable";
import { TaskInputModal } from "./todo/TaskInputModal";
import { useState } from "react";
// import { Overlay } from "./utils/Overlay";

export function Todo() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <main className="my-16 flex h-dvh w-dvw justify-center">
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
        <TaskTable />
        <TaskInputModal
          isOpen={isOpenModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </main>
  );
}
