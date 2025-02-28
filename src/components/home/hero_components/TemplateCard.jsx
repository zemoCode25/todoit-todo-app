import PropTypes from "prop-types";

export function TemplateCard({ template }) {
  const { templateName, description } = template;

  return (
    <div className="flex h-full flex-col items-start border-1 border-gray-200">
      <div className="flex w-full justify-center bg-gray-50 py-4">
        <img
          className="w-24"
          src={
            "/assets/https___images.ctfassets.net_dm4oa8qtogq0_1la3hgXN3C6hvQI6IulAKV_14b9e9e3675dea1a0d8b3e0c82559a52_accounting-tasks.avif"
          }
          alt=""
        />
      </div>
      <div className="p-3">
        <strong>{templateName}</strong>
        <p className="w-52">{description}</p>
      </div>
    </div>
  );
}

TemplateCard.propTypes = {
  template: PropTypes.shape({
    templateName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
