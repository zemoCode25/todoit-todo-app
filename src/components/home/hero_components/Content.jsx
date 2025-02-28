import image from "../../../../assets/headline_pic.jpg";

export function Content() {
  return (
    <div className="relative my-10 flex h-full justify-between">
      <div className="flex w-1/2 flex-col gap-72">
        {
          // !Text Content Container
        }
        <div className="flex flex-col gap-5">
          <strong>Clear your mind</strong>
          <h2 className="text-5xl font-semibold">
            Capture tasks at the speed of thought
          </h2>
          <p className="text-lg">
            We’ve spent over a decade refining Todoist to be an extension of
            your mind. Capture and organize tasks instantly using easy-flowing,
            natural language.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <strong>Plan with confidence</strong>
          <h2 className="text-5xl font-semibold">Simplify your planning</h2>
          <p className="text-lg">
            Make the most of your time. Schedule due dates, visualize your week
            in calendar view, and set recurring tasks with ease.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <strong>Organize your teamwork, too</strong>
          <h2 className="text-5xl font-semibold">
            A home for your team’s tasks
          </h2>
          <p className="text-lg">
            Give your team a shared space to collaborate and stay on top of it
            all – alongside but separate from your personal tasks and projects.
          </p>
        </div>
      </div>
      <div className="sticky top-40 h-fit w-[55%] rounded-lg pb-4">
        <img src={image} alt="todoit headline image" />
      </div>
    </div>
  );
}
