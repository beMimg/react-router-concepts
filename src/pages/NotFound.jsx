import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        minima veritatis voluptatum nulla vitae, perferendis obcaecati dolores
        doloremque. Hic ducimus atque dicta cumque ipsam! Numquam fugit in
        pariatur possimus porro!
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
}
