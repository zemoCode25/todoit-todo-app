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
      className="absolute left-1/2 top-10 -translate-x-1/2 flex flex-col p-5 bg-white shadow-[0_0_20px_3px_rgba(0,0,0,0.2)] w-[50%] z-20 rounded-lg "
    >
      <input
        className="text-lg font-semibold outline-none py-1 px-2 rounded-md"
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
      <div className="flex gap-3 ml-auto mt-2">
        <button
          onClick={onClose}
          className="px-4 py-1 bg-gray-100 rounded-md cursor-pointer"
        >
          Cancel
        </button>
        <button className="px-4 py-1 text-white bg-black rounded-md cursor-pointer">
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
