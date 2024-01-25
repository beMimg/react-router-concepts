import { Outlet, NavLink } from "react-router-dom";

export default function Help() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        eveniet veniam numquam dolorem quia quas et ex repellendus magnam autem.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
