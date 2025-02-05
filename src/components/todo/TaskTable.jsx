import { useState } from "react";
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
          </tr>
          {tasks.map((task, i) => (
            <tr
              className="cursor-pointer border-t-[1px] border-gray-300"
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
          ? { ...task, isCompleted: !isCompleted }
          : taskData;
      }),
    );
  }

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
          <p className="font-semibold">{taskName}</p>
          <small className="w-[10rem]">{description}</small>
        </div>
      </td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{taskStatus}</td>
      <td className="px-4 py-2">{priority}</td>
    </>
  );
}

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
