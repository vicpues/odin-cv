import "./AddButton.css";

export default function AddButton({ handler, sectionName }) {
  const accessibleName = `Add ${sectionName.toLowerCase()}`;
  return (
    <button
      className="add-group-button"
      type="button"
      title={accessibleName}
      aria-label={accessibleName}
      onClick={handler}
    >
      +
    </button>
  );
}
