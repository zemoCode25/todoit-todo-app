import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";

export function TaskInputModal({ isOpen, onClose, onTaskSubmit }) {
  const modalRef = useRef(null);
  const [taskData, setTaskData] = useState({
    taskName: "",
    description: "",
    priority: "Priority 1",
    taskStatus: "Todo",
    type: "Personal",
    isCompleted: false,
  });

  function handleFormChange(e) {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  }

  function handleTaskSubmit(e) {
    e.preventDefault();
    onTaskSubmit((prevTaskList) => {
      const updatedTaskList = [...prevTaskList, taskData];
      localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
      return updatedTaskList;
    });
    onClose();
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute top-10 left-1/2 z-20 flex w-[50%] -translate-x-1/2 flex-col rounded-lg bg-white p-5 shadow-[0_0_20px_3px_rgba(0,0,0,0.2)]"
    >
      <form className="flex flex-col" action="" onSubmit={handleTaskSubmit}>
        <input
          className="rounded-md px-2 py-1 text-lg font-semibold outline-none"
          type="text"
          placeholder="Task name"
          name="taskName"
          onChange={handleFormChange}
          required
        />
        <textarea
          name="description"
          placeholder="description"
          className="rounded-md px-2 py-1 outline-none"
          onChange={handleFormChange}
          required
        ></textarea>
        <div className="flex gap-3 border-b border-b-gray-200 pb-3">
          <select
            className="ml-2 block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
            name="priority"
            id="priority"
            value={taskData.priority}
            onChange={handleFormChange}
          >
            <option value="Priority 1st">Priority 1st</option>
            <option value="Priority 2nd">Priority 2nd</option>
            <option value="Priority 3rd">Priority 3rd</option>
            <option value="Priority 4th">Priority 4th</option>
          </select>
          <select
            className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
            name="taskStatus"
            id="status"
            value={taskData.taskStatus}
            onChange={handleFormChange}
          >
            <option value="Todo">Todo</option>
            <option value="In progress">In progress</option>
            <option value="Backlog">Backlog</option>
            <option value="Canceled">Canceled</option>
            <option value="Completed">Completed</option>
          </select>
          <select
            className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
            name="type"
            id="type"
            value={taskData.type}
            onChange={handleFormChange}
          >
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
            <option value="Academic">Academic</option>
            <option value="Health">Health</option>
            <option value="Hobby">Hobby</option>
          </select>
        </div>
        <div className="mt-2 ml-auto flex gap-3">
          <button
            onClick={onClose}
            className="cursor-pointer rounded-md bg-gray-100 px-4 py-1"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer rounded-md bg-black px-4 py-1 text-white"
            type="submit"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

TaskInputModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onTaskSubmit: PropTypes.func.isRequired,
};
