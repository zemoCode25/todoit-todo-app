import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function Header({ directTodo }) {
  return (
    <header className="mx-auto flex max-w-[1280px] justify-between py-6">
      <div
        onClick={directTodo}
        className="flex cursor-pointer items-center gap-2"
      >
        <button className="h-fit rounded-md bg-black p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
          </svg>
        </button>
        <p className="text-2xl font-semibold">todoit</p>
      </div>
      <nav>
        <ul className="flex items-center justify-between gap-5 align-middle">
          <Link
            to={"/features"}
            className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-200"
          >
            Features
          </Link>
          <Link
            to={"/blogs"}
            className="cursor-pointer rounded-md px-3 py-2 hover:bg-gray-200"
          >
            Blogs
          </Link>
          <button
            onClick={directTodo}
            className="cursor-pointer rounded-md bg-black px-3 py-2 font-semibold text-white hover:shadow-md"
          >
            Start for Free
          </button>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  directTodo: PropTypes.func.isRequired,
};
