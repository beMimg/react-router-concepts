import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replate={true}></Navigate>;
  }

  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eligendi
        dolorem fuga praesentium distinctio placeat quibusdam saepe, dolores id
        dolore!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, sint
        deleniti doloribus nam odio veritatis, non molestiae aperiam dolor ipsum
        eum facilis velit accusamus. Tempore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tenetur cum aperiam cupiditate accusamus error at rerum, suscipit
        nesciunt quibusdam hic! Asperiores molestias natus libero sit dolorum
        nobis voluptate velit?
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
