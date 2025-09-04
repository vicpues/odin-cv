import Icon from "@mdi/react";
import "./NavLink.css";

export default function NavLink({ title, href, svgPath }) {
  return (
    <a title={title} href={href} target="_blank" className="nav-link">
      <Icon path={svgPath} className="nav-link-icon" />
    </a>
  );
}
