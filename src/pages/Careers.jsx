import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.name}</p>
          <p>Based in {career.address.city}</p>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw Error("Could not fetch careers");
  }

  return res.json();
};
