import Image from "next/image";
import STARS from "../../../public/images/palace.jpeg";

async function collectPlanets(id) {
  const res = await fetch(`https://swapi.dev/api/planets/${id}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch planet details");
  }
  return res.json();
}

export default async function Details({ params }) {
  const planet = await collectPlanets(params.id);

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
      <h1 className="text-2xl font-bold mb-4">{planet.name}</h1>
      <ul className="space-y-2 mt-4">
        <li>
          <strong>Rotation Period:</strong> {planet.rotation_period}
        </li>
        <li>
          <strong>Orbital Period:</strong> {planet.orbital_period}
        </li>
        <li>
          <strong>Diameter:</strong> {planet.diameter}
        </li>
        <li>
          <strong>Climate:</strong> {planet.climate}
        </li>
        <li>
          <strong>Gravity:</strong> {planet.gravity}
        </li>
        <li>
          <strong>Terrain:</strong> {planet.terrain}
        </li>
        <li>
          <strong>Surface Water:</strong> {planet.surface_water}
        </li>
        <li>
          <strong>Population:</strong> {planet.population}
        </li>
      </ul>
    </main>
  );
}
