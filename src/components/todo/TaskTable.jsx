export function TaskTable() {
  return (
    <div className="border-gray-300 border rounded-lg">
      <table className="w-[100%] border-collapse">
        <tbody>
          <tr className="border-gray-300">
            <th className="text-left text-sm py-1 px-4 text-gray-500">Task</th>
            <th className="text-left text-sm py-2 px-4 text-gray-500">Type</th>
            <th className="text-left text-sm py-2 px-4 text-gray-500">
              Status
            </th>
            <th className="text-left text-sm py-2 px-4 text-gray-500">
              Priority
            </th>
          </tr>
          <tr className="border-t-[1px] border-gray-300">
            <td className="py-3 px-4 font-semibold">Alfreds Futterkiste</td>
            <td className="py-3 px-4">Maria Anders</td>
            <td className="py-3 px-4">Germany</td>
          </tr>
          <tr className="border-t-[1px] border-gray-300">
            <td className="py-3 px-4 font-semibold">
              Centro comercial Moctezuma
            </td>
            <td className="py-3 px-4">Francisco Chang</td>
            <td className="py-3 px-4">Mexico</td>
          </tr>
          <tr className="border-t-[1px] border-gray-300">
            <td className="py-3 px-4 font-semibold">
              Centro comercial Moctezuma
            </td>
            <td className="py-3 px-4">Francisco Chang</td>
            <td className="py-3 px-4">Mexico</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
