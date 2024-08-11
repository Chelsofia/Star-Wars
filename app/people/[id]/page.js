import Image from "next/image";
import Link from "next/link";
import STARS from "../../../public/images/yoda.jpg";

async function collectPeople(id) {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch person details");
  }
  return res.json();
}

export default async function Details({ params }) {
  const person = await collectPeople(params.id);

  return (
    <main className="flex flex-col items-center text-center">
      <div className="mb-4 mt-10">
        <Image
          src={STARS}
          alt="Stars"
          width={500}
          height={100}
          className="mx-auto"
        />
      </div>
      <h1 className="text-2xl font-bold mb-4">{person.name}</h1>
      <ul className="space-y-2 mt-4">
        <li>
          <strong>Height:</strong> {person.height} cm
        </li>
        <li>
          <strong>Mass:</strong> {person.mass} kg
        </li>
        <li>
          <strong>Hair Color:</strong> {person.hair_color}
        </li>
        <li>
          <strong>Skin Color:</strong> {person.skin_color}
        </li>
        <li>
          <strong>Eye Color:</strong> {person.eye_color}
        </li>
        <li>
          <strong>Birth Year:</strong> {person.birth_year}
        </li>
        <li>
          <strong>Gender:</strong> {person.gender}
        </li>
      </ul>
    </main>
  );
}
