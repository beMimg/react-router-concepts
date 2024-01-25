import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div>
      <p>{career.email}</p>
      <p>{career.username}</p>
    </div>
  );
}

export const careerDetails = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
