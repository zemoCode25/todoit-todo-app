export function TaskInputModal() {
  return (
    <div className="p-3 bg-white">
      <input className="text-lg" type="text" placeholder="" />
      <div>
        <button>Cancel</button>
        <button>Add Task</button>
      </div>
    </div>
  );
}
