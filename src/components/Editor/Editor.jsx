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

  function swipeHandler(e) {
    const editor = e.target;
    const midpoint = editor.offsetWidth / 2;
    const currentOffset = editor.scrollLeft;
    setView(currentOffset < midpoint ? EDIT : PREVIEW);
  }

  return (
    <main id="editor" onScroll={swipeHandler}>
      {children}
    </main>
  );
}
