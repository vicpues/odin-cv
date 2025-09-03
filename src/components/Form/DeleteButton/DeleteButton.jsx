import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
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
      <Icon path={mdiClose} size={1} className="centered-icon" />
    </button>
  );
}
