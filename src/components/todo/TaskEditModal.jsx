import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function TaskEditModal({ isOpen, task, updateTasks, onClose }) {
  const [updateData, setUpdateData] = useState(task || {});

  useEffect(() => {
    if (task) {
      setUpdateData(task);
    }
  }, [task]);

  const { taskName, description, type, taskStatus, priority, isCompleted } =
    updateData;

  function handleFormChange(e) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckboxChange(e) {
    setUpdateData({
      ...updateData,
      isCompleted: e.target.value,
    });
  }

  if (!isOpen) return null;

  return (
    <div className="absolute top-1/2 left-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md bg-white p-3">
      <form action="" onSubmit={() => updateTasks(updateData)}>
        <div className="flex gap-3">
          <div className="p-0.5">
            <input
              type="checkbox"
              // checked={isCompleted}
              className="inline-block h-fit pt-10"
              onChange={handleCheckboxChange}
              value={isCompleted}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <input
                onChange={handleFormChange}
                type="text"
                placeholder="Task name"
                name="taskName"
                value={taskName}
                className="rounded-md px-2 py-1 font-semibold outline-none"
              />
            </div>
            <textarea
              name="description"
              placeholder="description"
              className="rounded-md px-2 py-1 outline-none"
              onChange={handleFormChange}
              value={description}
              required
            ></textarea>
            <div className="flex gap-3 border-b border-b-gray-300 pb-3">
              <select
                className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
                name="priority"
                id="priority"
                value={priority}
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
                value={taskStatus}
                onChange={handleFormChange}
              >
                <option value="Todo">Todo</option>
                <option value="In progress">In progress</option>
                <option value="Backlog">Backlog</option>
                <option value="Canceled">Canceled</option>
              </select>
              <select
                className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
                name="type"
                id="type"
                value={type}
                onChange={handleFormChange}
              >
                <option value="Personal">Personal</option>
                <option value="Professional">Professional</option>
                <option value="Academic">Academic</option>
                <option value="Health">Health</option>
                <option value="Hobby">Hobby</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="w-full cursor-pointer rounded-md bg-gray-300 px-4 py-1 text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-md bg-black px-4 py-1 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

TaskEditModal.propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string,
    type: PropTypes.string,
    taskStatus: PropTypes.string,
    priority: PropTypes.string,
    description: PropTypes.string,
    isCompleted: PropTypes.bool,
  }),
  isOpen: PropTypes.bool.isRequired,
  updateTasks: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
