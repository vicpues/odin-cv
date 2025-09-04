import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1 id="app-title">
        Résumez <span className="app-descriptor">App</span>
      </h1>

      <div id="nav-links-container">
        <a
          title="Source code on Github"
          href="https://github.com/vicpues/odin-cv"
          target="_blank"
          className="nav-link"
        >
          <Icon path={mdiGithub} className="nav-link-icon" />
        </a>
      </div>
    </nav>
  );
}
