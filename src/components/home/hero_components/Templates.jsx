import { TemplateContainer } from "./TemplateContainer";

export function Templates() {
  return (
    <div className="my-24">
      <div className="flex flex-col space-y-8 items-center">
        <h3 className="text-4xl font-bold">
          Kickstart your next project with Todoist Templates
        </h3>
        <p className="w-1/2 text-gray-600 text-xl text-center">
          No need to create projects or setups from scratch when we have 50+
          templates made for you.
        </p>
      </div>
      <TemplateContainer />
    </div>
  );
}
