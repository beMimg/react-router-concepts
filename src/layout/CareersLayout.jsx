import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div>
      <h1>Careers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        ratione officia accusamus similique nostrum corrupti sapiente? Dolorem
        porro iure necessitatibus?
      </p>
      <Outlet></Outlet>
    </div>
  );
}
