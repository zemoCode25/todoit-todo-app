export function TaskTable() {
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
          <tr className="border-t-[1px] border-gray-300">
            <td className="px-4 py-3 font-semibold">Alfreds Futterkiste</td>
            <td className="px-4 py-3">Maria Anders</td>
            <td className="px-4 py-3">Germany</td>
          </tr>
          <tr className="border-t-[1px] border-gray-300">
            <td className="px-4 py-3 font-semibold">
              Centro comercial Moctezuma
            </td>
            <td className="px-4 py-3">Francisco Chang</td>
            <td className="px-4 py-3">Mexico</td>
          </tr>
          <tr className="border-t-[1px] border-gray-300">
            <td className="px-4 py-3 font-semibold">
              Centro comercial Moctezuma
            </td>
            <td className="px-4 py-3">Francisco Chang</td>
            <td className="px-4 py-3">Mexico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
