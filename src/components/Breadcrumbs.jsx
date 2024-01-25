import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  console.log(location.pathname);

  let currentLocation = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLocation += `/${crumb}`;

      return (
        <Link key={currentLocation} to={currentLocation}>
          /{crumb}
        </Link>
      );
    });

  return (
    <div>
      <p>{crumbs}</p>
    </div>
  );
}
