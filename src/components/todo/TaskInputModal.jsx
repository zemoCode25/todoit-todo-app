export function TaskInputModal() {
  return (
    <div className="flex flex-col p-5 bg-white shadow-xl w-[50%] z-20 rounded-lg gap-">
      <input
        className="text-lg outline-none py-1 px-2 rounded-md"
        type="text"
        placeholder="Task name"
      />
      <input
        className="outline-none py-1 px-2 rounded-md"
        type="text"
        placeholder="description"
      />
      <div className="flex gap-3 pb-3 border-b border-b-gray-200">
        <select
          className="block px-2 py-1 ml-2 w-fit text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none text-sm cursor-pointer  outline-none focus:ring-0"
          name="cars"
          id="cars"
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
        <select
          className="block px-2 py-1 w-fit text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none text-sm cursor-pointer  outline-none focus:ring-0"
          name="cars"
          id="cars"
          value={"pangit"}
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
        <select
          className="block px-2 py-1 w-fit text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none text-sm cursor-pointer  outline-none focus:ring-0"
          name="cars"
          id="cars"
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
      </div>
      <div className="flex gap-3 ml-auto">
        <button className="px-4 py-1 bg-gray-100 rounded-md cursor-pointer">
          Cancel
        </button>
        <button className="px-4 py-1 text-white bg-black rounded-md cursor-pointer">
          Add Task
        </button>
      </div>
    </div>
  );
}
