import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

export function TaskInputModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="absolute top-10 left-1/2 z-20 flex w-[50%] -translate-x-1/2 flex-col rounded-lg bg-white p-5 shadow-[0_0_20px_3px_rgba(0,0,0,0.2)]"
    >
      <input
        className="rounded-md px-2 py-1 text-lg font-semibold outline-none"
        type="text"
        placeholder="Task name"
      />
      <input
        className="rounded-md px-2 py-1 outline-none"
        type="text"
        placeholder="description"
      />
      <div className="flex gap-3 border-b border-b-gray-200 pb-3">
        <select
          className="ml-2 block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
          name="cars"
          id="cars"
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
        <select
          className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
          name="cars"
          id="cars"
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
        <select
          className="block w-fit cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-700 shadow-sm outline-none focus:ring-0"
          name="cars"
          id="cars"
        >
          <option value="volvo">Priority 1st</option>
          <option value="saab">Priority 2nd</option>
          <option value="mercedes">Priority 3rd</option>
          <option value="audi">Priority 4th</option>
        </select>
      </div>
      <div className="mt-2 ml-auto flex gap-3">
        <button
          onClick={onClose}
          className="cursor-pointer rounded-md bg-gray-100 px-4 py-1"
        >
          Cancel
        </button>
        <button className="cursor-pointer rounded-md bg-black px-4 py-1 text-white">
          Add Task
        </button>
      </div>
    </div>
  );
}

TaskInputModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
