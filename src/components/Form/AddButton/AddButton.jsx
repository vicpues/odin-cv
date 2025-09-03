import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
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
      <Icon path={mdiPlus} size={1} className="centered-icon" />
    </button>
  );
}
