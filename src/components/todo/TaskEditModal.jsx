import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Overlay } from "../utils/components/Overlay";

export function TaskEditModal({ isOpen, task, updateTasks, onClose }) {
  const [updateData, setUpdateData] = useState(task || {});
  const [isOverlayOpen, setOverlayOpen] = useState(true);

  useEffect(() => {
    if (task) {
      setUpdateData(task);
    }
  }, [task]);

  const {
    taskName,
    description,
    type,
    taskStatus,
    priority,
    isCompleted,
    taskNumber,
  } = updateData;

  useEffect(() => {
    if (isOpen) {
      setOverlayOpen(true);
    }

    if (!isOverlayOpen) {
      onClose();
    }
  }, [isOverlayOpen, onClose, isOpen]);

  function handleFormChange(e) {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckboxChange() {
    setUpdateData({
      ...updateData,
      isCompleted: !isCompleted,
      taskStatus: isCompleted ? "Completed" : updateData.taskStatus,
    });
  }

  function handleFormSubmission(e) {
    e.preventDefault();
    updateTasks((prevTaskList) => {
      const updatedTaskList = prevTaskList.map((currentTask, i) =>
        taskNumber === i ? { ...updateData } : currentTask,
      );
      return updatedTaskList;
    });
    onClose();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="absolute top-1/2 left-1/2 z-50 flex w-fit -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md bg-white p-5">
        <form action="" onSubmit={handleFormSubmission}>
          <div className="flex gap-3">
            <div className="p-0.5">
              <input
                type="checkbox"
                checked={isCompleted}
                className="inline-block h-fit pt-10"
                onChange={handleCheckboxChange}
                value={isCompleted || false}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <input
                  onChange={handleFormChange}
                  type="text"
                  placeholder="Task name"
                  name="taskName"
                  value={taskName || ""}
                  className="rounded-md px-2 py-1 font-semibold outline-none"
                />
              </div>
              <textarea
                name="description"
                placeholder="description"
                className="rounded-md px-2 py-1 text-sm outline outline-gray-200"
                onChange={handleFormChange}
                value={description || ""}
              ></textarea>
              <div className="flex gap-3 border-b border-b-gray-300 pb-3">
                <select
                  className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
                  name="priority"
                  id="priority"
                  value={priority || "Priority 1st"}
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
                  value={taskStatus || "Todo"}
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
                  value={type || "Personal"}
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
                  onClick={() => {
                    onClose();
                  }}
                  className="w-full cursor-pointer rounded-md bg-gray-100 px-4 py-1 text-black"
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
      {isOverlayOpen && <Overlay closeOverlay={() => setOverlayOpen(false)} />}
    </>
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
    taskNumber: PropTypes.number,
  }),
  isOpen: PropTypes.bool.isRequired,
  updateTasks: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
