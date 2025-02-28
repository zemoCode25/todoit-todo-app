import PropTypes from "prop-types";
import image from "../../../../assets/headline_pic.jpg";

export function Headline({ directTodo }) {
  return (
    <div className="flex justify-between">
      <div className="w-[40%]">
        <h1 className="text-[3.5rem] leading-none font-bold">
          Organize your work and life, finally.
        </h1>
        <p className="my-4 w-11/12 text-lg">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>
        <button
          onClick={directTodo}
          className="cursor-pointer rounded-lg bg-black px-4 py-3 text-lg font-semibold text-white hover:shadow-md"
        >
          Start for free
        </button>
      </div>
      <div className="w-[55%] rounded-lg bg-black p-4">
        <img src={image} alt="todoit headline image" />
      </div>
    </div>
  );
}

Headline.propTypes = {
  directTodo: PropTypes.func.isRequired,
};
