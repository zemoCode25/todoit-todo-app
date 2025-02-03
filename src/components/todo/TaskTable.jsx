import PropTypes from "prop-types";

export function TaskTable({ tasks }) {
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
            >
              {<TableData task={task} />}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableData({ task }) {
  const { taskName, description, type, taskStatus, priority } = task;

  return (
    <>
      <td className="flex flex-col px-4 py-2">
        <p className="font-semibold">{taskName}</p>
        <small className="w-[10rem]">{description}</small>
      </td>
      <td className="px-4 py-2">{type}</td>
      <td className="px-4 py-2">{taskStatus}</td>
      <td className="px-4 py-2">{priority}</td>
    </>
  );
}

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
};

TableData.propTypes = {
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    taskStatus: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
