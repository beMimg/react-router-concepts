import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <Breadcrumbs></Breadcrumbs>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
