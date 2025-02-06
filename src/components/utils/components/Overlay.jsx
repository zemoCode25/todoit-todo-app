import PropTypes from "prop-types";

export function Overlay({ closeOverlay }) {
  return (
    <div
      onClick={() => {
        closeOverlay();
      }}
      className="fixed inset-0 z-10 cursor-pointer bg-black opacity-40"
    ></div>
  );
}

Overlay.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
};
