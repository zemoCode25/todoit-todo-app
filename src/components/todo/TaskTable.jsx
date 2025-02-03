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
            <TableRow task={task} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ task, key }) {
  return (
    <tr key={key}>
      <td>{task.taskName}</td>
      <td>{task.type}</td>
      <td>{task.taskStatus}</td>
      <td>{task.priority}</td>
    </tr>
  );
}

TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
};

TableRow.propTypes = {
  key: PropTypes.number,
  task: PropTypes.shape({
    taskName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    taskStatus: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }),
};
