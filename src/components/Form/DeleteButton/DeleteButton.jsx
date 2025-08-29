import "./DeleteButton.css";

export default function DeleteButton({ sectionTitle, onDelete }) {
  const accessibleName = `Remove this ${sectionTitle.toLowerCase()}`;
  return (
    <button
      aria-label={accessibleName}
      title={accessibleName}
      className="delete-group-button"
      onClick={onDelete}
      type="button"
    >
      X
    </button>
  );
}
