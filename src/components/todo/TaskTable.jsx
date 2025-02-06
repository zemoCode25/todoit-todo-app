import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { TaskEditModal } from "./TaskEditModal";

export function TaskTable({ tasks, updateTasks }) {
  const [selectedTask, setSelectedTask] = useState({});
  const [isUpdateOpen, setUpdateOpen] = useState(false);

  return (
    <div className="rounded-lg border border-gray-300">
      <table className="w-[100%] border-collapse">
        <tbody>
          <tr className="border-gray-300">
            <th className="px-4 py-1 text-left text-sm text-gray-500">Task</th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">Type</th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">
              Priority
            </th>
            <th className="px-4 py-2 text-left text-sm text-gray-500"></th>
          </tr>
          {tasks.map((task, i) => (
            <tr
              className="cursor-pointer border-t-[1px] border-gray-300 hover:bg-gray-50"
              key={i}
              onClick={() => {
                setSelectedTask({
                  ...task,
                  taskNumber: i,
                });
                setUpdateOpen(true);
              }}
            >
              {
                <TableData
                  task={task}
                  updateTasks={updateTasks}
                  taskNumber={i}
                />
              }
            </tr>
          ))}
        </tbody>
      </table>
      <TaskEditModal
        updateTasks={updateTasks}
        task={selectedTask}
        isOpen={isUpdateOpen}
        onClose={() => setUpdateOpen(false)}
      />
    </div>
  );
}

function TableData({ task, updateTasks, taskNumber }) {
  const { taskName, description, type, taskStatus, priority, isCompleted } =
    task;

  function handleCheckChange(e) {
    e.stopPropagation();
    updateTasks((prevTaskList) =>
      prevTaskList.map((taskData, i) => {
        return i === taskNumber
          ? {
              ...task,
              isCompleted: !isCompleted,
              taskStatus: !isCompleted ? "Completed" : taskData.taskStatus,
            }
          : taskData;
      }),
    );
  }

  // * Add table data of three dot option for all the table rows\
  // * Attach a state for each three dot button to open option div
  // * OnClick event to delete the task

  return (
    <>
      <td className="flex gap-3 px-4 py-2 align-middle">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckChange}
          onClick={(e) => e.stopPropagation()}
        />
        <div className="flex flex-col">
          <p className={`font-semibold ${isCompleted ? "line-through" : ""}`}>
            {taskName}
          </p>
          <small className="w-[10rem]">{description}</small>
        </div>
      </td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{taskStatus}</td>
      <td className="px-4 py-2">{priority}</td>
      <td className="px-4 py-2"></td>
      <td className="px-4 py-2">
        <ThreeDot updateTasks={updateTasks} taskNumber={taskNumber} />
      </td>
    </>
  );
}

export function ThreeDot({ updateTasks, taskNumber: targetTaskIndex }) {
  const [isOptionOpen, setOption] = useState(false);
  const optionDiv = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (optionDiv.current && !optionDiv.current.contains(e.target)) {
        setOption(false);
      }
    }

    if (isOptionOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    () => {
      return document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [isOptionOpen]);

  function handleThreeDotClick(e) {
    e.stopPropagation();
    setOption(!isOptionOpen);
    console.log("CLICKED");
  }

  function handleDelete(e) {
    e.stopPropagation();
    setOption(false);
    // Filter the task state variable by extracting all element whose index does not match the target task
    updateTasks((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter(
        (task, i) => i !== targetTaskIndex,
      );
      return updatedTaskList;
    });
  }

  return (
    <div
      onClick={handleThreeDotClick}
      className="relative flex w-fit items-center"
      ref={optionDiv}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#6A7282"
        className="z-0"
      >
        <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
      </svg>
      {isOptionOpen && (
        <div className="absolute top-7 z-50 rounded-sm border border-gray-100 bg-white p-2 shadow-md">
          <button
            onClick={handleDelete}
            className="cursor-pointer rounded-md px-4 py-1.5 text-sm text-black transition-all duration-200 ease-in-out hover:bg-red-700 hover:text-white"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

ThreeDot.propTypes = {
  updateTasks: PropTypes.func.isRequired,
  taskNumber: PropTypes.number.isRequired,
};

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  updateTasks: PropTypes.func.isRequired,
};

TableData.propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    taskStatus: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
  updateTasks: PropTypes.func.isRequired,
  taskNumber: PropTypes.number.isRequired,
};
