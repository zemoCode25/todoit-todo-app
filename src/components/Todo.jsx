import { TaskTable } from "./todo/TaskTable";
import { TaskInputModal } from "./todo/TaskInputModal";
import { useState } from "react";
// import { Overlay } from "./utils/Overlay";

export function Todo() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <main className="w-dvw h-dvh flex justify-center my-16">
      <div className="relative flex flex-col w-2/3">
        <div>
          <h1 className="text-4xl font-semibold">todoit tasks!</h1>
          <p className="text-gray-600">
            Make sure to finish all your task today!
          </p>
        </div>
        <div className="flex justify-between my-3">
          <input
            className="py-1 px-2 text-sm outline outline-gray-300 rounded-md"
            placeholder="Filter task..."
            type="text"
          />
          <button
            onClick={() => setOpenModal(true)}
            className="bg-black px-4 py-1.5 rounded-md text-white cursor-pointer hover:shadow-md"
          >
            <span className="px-1 text-white font-bold">+</span>Add task
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
