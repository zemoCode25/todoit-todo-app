import { useState } from "react";
import { contentTemplates } from "../../../content/templates-content";

export function TemplateContainer() {
  const [category, setCategory] = useState(0);

  function handleCategoryChange(num) {
    setCategory(num);
    {
      category;
    }
  }

  return (
    <div className="flex items-center justify-center my-10">
      <CategoryList handleCategoryChange={handleCategoryChange} />
    </div>
  );
}

function CategoryList() {
  const templateCategories = contentTemplates.map(
    (contentTemplate) => contentTemplate.templateGroupName
  );

  console.log(templateCategories);

  return (
    <ul className="flex gap-16">
      {templateCategories.map((category, i) => {
        return (
          <li key={i}>
            <button className="text-xl cursor-pointer font-semibold py-4 px-8 bg-gray-100 rounded-md hover:bg-gray-200">
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
