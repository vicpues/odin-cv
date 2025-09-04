import NavLink from "./NavLink/NavLink";
import Icon from "@mdi/react";
import { mdiFileAccount } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div id="app-title">
        <Icon className="app-logo" path={mdiFileAccount} />
        <h1 id="app-name">
          Résumez <span className="app-descriptor">App</span>
        </h1>
      </div>

      <div id="nav-links-container">
        <NavLink
          title="Source code on Github"
          href="https://github.com/vicpues/odin-cv"
          svgPath={mdiGithub}
        />
      </div>
    </nav>
  );
}
