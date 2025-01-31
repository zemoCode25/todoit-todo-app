import PropTypes from "prop-types";

export function CTA({ directTodo }) {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center">
        <h4 className="mb-8 w-7/10 text-center text-5xl font-semibold">
          Gain calmness and clarity with the world’s most beloved productivity
          app
        </h4>
        <p className="mb-5">
          374000+ ★★★★★ reviews on Google Play and App Store
        </p>
        <button
          onClick={directTodo}
          className="cursor-pointer rounded-md bg-black px-5 py-4 font-semibold text-white hover:shadow-xl"
        >
          Start for Free
        </button>
      </div>
    </section>
  );
}

CTA.propTypes = {
  directTodo: PropTypes.func.isRequired,
};
