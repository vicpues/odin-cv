import NavLink from "./NavLink/NavLink";
import { mdiGithub } from "@mdi/js";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1 id="app-title">
        Résumez <span className="app-descriptor">App</span>
      </h1>

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
