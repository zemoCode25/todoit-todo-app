export function Headline() {
  return (
    <div className="flex justify-between">
      <div className="w-[40%]">
        <h1 className="text-[3.5rem] leading-none font-bold">
          Organize your work and life, finally.
        </h1>
        <p className="text-lg w-11/12 my-4">
          Simplify life for both you and your team with the world’s #1 task
          manager and to-do list app.
        </p>
        <button className="text-lg py-3 px-4 bg-black text-white font-semibold rounded-lg hover:shadow-md cursor-pointer">
          Start for free
        </button>
      </div>
      <div className="pb-4 bg-black w-[55%] rounded-lg">
        <img
          src="./public/assets/https___todoist.com_static_home-teams_intro_wide_headerui.en.avif"
          alt="todoit headline image"
        />
      </div>
    </div>
  );
}
