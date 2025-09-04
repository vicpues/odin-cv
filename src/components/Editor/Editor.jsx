import ViewButton from "./ViewButton/ViewButton";
import { useState } from "react";

export default function Editor({ children }) {
  const PARALLEL = "parallel";
  const EDIT = "edit";
  const PREVIEW = "preview";

  const [view, setView] = useState(isMobile() ? EDIT : PARALLEL);

  window.addEventListener("resize", () => {
    setView(isMobile() ? EDIT : PARALLEL);
  });

  function isMobile() {
    const MOBILE_BREAKPOINT = 600;
    return window.innerWidth <= MOBILE_BREAKPOINT;
  }

  function updateView(e) {
    const editor = e.target;
    const midpoint = editor.offsetWidth / 2;
    const currentOffset = editor.scrollLeft;
    setView(currentOffset < midpoint ? EDIT : PREVIEW);
  }

  function switchView() {
    const editor = document.querySelector("#editor");
    if (view === EDIT) {
      editor.scrollTo({ top: 0, left: editor.offsetWidth, behavior: "smooth" });
    } else {
      editor.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }

  return (
    <main id="editor" onScroll={updateView}>
      {children}
      {view !== PARALLEL && <ViewButton view={view} onClick={switchView} />}
    </main>
  );
}
