import { NavLink } from "react-router";

function Link({ namePage, iconPage, toPage }) {
  return (
    <NavLink
      to={toPage}
      className={({ isActive }) =>
        `flex items-center gap-2 rounded-md p-1.5 text-gray-700 transition ${
          isActive ? "bg-blue-500 text-white font-medium" : "hover:bg-gray-200"
        }`
      }
    >
      {iconPage}
      {namePage}
    </NavLink>
  );
}

export default Link;
