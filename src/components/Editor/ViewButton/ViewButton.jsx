import Icon from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";
import "./ViewButton.css";

export default function SwitchViewButton({ view }) {
  const accessibleTitle = `Switch to ${view === "edit" ? "preview" : "edit"} mode`;

  return (
    <button
      id="view-button"
      title={accessibleTitle}
      aria-label={accessibleTitle}
      className={view === "preview" ? "preview" : ""}
    >
      <Icon path={mdiMenuRight} />{" "}
    </button>
  );
}
