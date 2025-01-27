import PropTypes from "prop-types";
import { useState } from "react";
import { contentTemplates } from "../../../content/templates-content";
import { TemplateCard } from "./TemplateCard";

export function TemplateContainer() {
  const [category, setCategory] = useState("Work");

  console.log(category);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <CategoryList updateCategory={setCategory} currentCategory={category} />
      <TemplateList category={category} />
    </div>
  );
}

function CategoryList({ updateCategory, currentCategory }) {
  const templateCategories = contentTemplates.map(
    (contentTemplate) => contentTemplate.templateGroupName
  );

  console.log(templateCategories);

  return (
    <ul className="flex gap-10">
      {templateCategories.map((category, i) => {
        return (
          <li key={i}>
            <button
              onClick={() => updateCategory(category)}
              className={`text-lg cursor-pointer font-semibold py-4 px-8 rounded-md ${
                currentCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function TemplateList({ category }) {
  const template = contentTemplates.filter((contentTemplate) => {
    return contentTemplate.templateGroupName === category;
  });

  const templateGroup = template[0].templateGroup;

  return (
    <ul className="flex gap-4 my-10">
      {templateGroup.map((template, i) => (
        <li key={i}>
          <TemplateCard template={template} />
        </li>
      ))}
    </ul>
  );
}

CategoryList.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
};

TemplateList.propTypes = {
  category: PropTypes.string.isRequired,
};
