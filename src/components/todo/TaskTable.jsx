import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { TaskEditModal } from "./TaskEditModal";

// *

export function TaskTable({ tasks, updateTasks, filter }) {
  const [selectedTask, setSelectedTask] = useState({});
  const [isUpdateOpen, setUpdateOpen] = useState(false);

  const [sort, setSort] = useState({
    headerToSort: "task",
    direction: "asc",
  });

  const sortTypeColumn = useCallback(() => {
    const tasksCopy = [...tasks];

    const priorityOrder = {
      Personal: 1,
      Professional: 2,
      Academic: 3,
      Health: 4,
      Hobby: 5,
    };

    return tasksCopy.sort((a, b) => {
      const orderA = priorityOrder[a.type];
      const orderB = priorityOrder[b.type];

      return sort.direction === "desc" ? orderB - orderA : orderA - orderB;
    });
  }, [sort.direction, tasks]);

  const sortStatusColumn = useCallback(() => {
    const tasksCopy = [...tasks];

    const priorityOrder = {
      ["Todo"]: 1,
      ["In progress"]: 2,
      ["Backlog"]: 3,
      ["Canceled"]: 4,
      ["Completed"]: 5,
    };

    return tasksCopy.sort((a, b) => {
      const orderA = priorityOrder[a.taskStatus];
      const orderB = priorityOrder[b.taskStatus];

      return sort.direction === "desc" ? orderB - orderA : orderA - orderB;
    });
  }, [tasks, sort.direction]);

  const sortPriorityColumn = useCallback(() => {
    const tasksCopy = [...tasks];

    const priorityOrder = {
      ["Priority 1st"]: 1,
      ["Priority 2nd"]: 2,
      ["Priority 3rd"]: 3,
      ["Priority 4th"]: 4,
    };

    const yey = tasksCopy.sort((a, b) => {
      const orderA = priorityOrder[a.priority];
      const orderB = priorityOrder[b.priority];

      return sort.direction === "desc" ? orderB - orderA : orderA - orderB;
    });
    return yey;
  }, [tasks, sort.direction]);

  function handleHeaderClick(header) {
    setSort((prevSort) => ({
      headerToSort: header,
      direction:
        prevSort.headerToSort === header
          ? prevSort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    }));
  }

  // getSortedTasks from tasks and sort changes and eventually recreate the getfilteredTasks function

  const getSortedTasks = useCallback(() => {
    if (sort.headerToSort === "task") return tasks;
    if (sort.headerToSort === "type") return sortTypeColumn(tasks);
    if (sort.headerToSort === "taskStatus") return sortStatusColumn(tasks);
    if (sort.headerToSort === "priority") return sortPriorityColumn(tasks);

    return tasks; // Default case (fallback)
  }, [tasks, sort, sortPriorityColumn, sortStatusColumn, sortTypeColumn]);

  // getfilteredTasks reacts from getSortedTasks changes in order to filter the sorted tasks
  const getfilteredTasks = useCallback(() => {
    const sortedTasks = getSortedTasks();

    return sortedTasks.filter((task) =>
      task.taskName.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, getSortedTasks]);

  // update filteredTasks whenever getfilteredTasks runs

  const filteredTasks = useMemo(() => getfilteredTasks(), [getfilteredTasks]);

  const headerLabels = ["Task", "Type", "Status", "Priority"];

  const headerClickLabel = {
    Type: "type",
    Status: "taskStatus",
    Priority: "priority",
  };

  return (
    <div className="rounded-lg border border-gray-300">
      <table className="w-[100%] border-collapse">
        <tbody>
          <tr className="border-gray-300">
            {headerLabels.map((label, i) => {
              if (label === "Task") {
                return (
                  <th
                    key={i}
                    className="cursor-pointer px-4 py-1 text-left text-sm text-gray-500"
                  >
                    Task
                  </th>
                );
              }

              return (
                <th
                  onClick={() => handleHeaderClick(headerClickLabel[label])}
                  key={i}
                  className="cursor-pointer px-4 py-1 text-left text-sm text-gray-500"
                >
                  {label}
                </th>
              );
            })}
            <th className="px-4 py-2 text-left text-sm text-gray-500"></th>
          </tr>
          {filteredTasks.map((task, i) => (
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

  // * Add table data of three dot option for all the table rows
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
  filter: PropTypes.string.isRequired,
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
