import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

export default function NavLink({
  className,
  activeClassName,
  children,
  link,
  offset,
}) {
  return (
    <Link
      className={className}
      activeClass={activeClassName}
      to={link}
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
    >
      {children}
    </Link>
  );
}
