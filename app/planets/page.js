"use client";
import Link from "next/link";
import Image from "next/image";
import Tatooine from "../../public/images/Tatooine.jpg";
import { useEffect, useState } from "react";

export default function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  function handleFetch() {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data.results);
      });
  }

  const cards = planets.map((planet) => {
    // Extract the planet ID from the URL
    const planetId = planet.url.split("/").slice(-2, -1)[0];

    return (
      <Link
        key={planet.url} // Use planet.url as the key
        href={`/planets/${encodeURIComponent(planetId)}`} // Correct path with planet ID
        className="card-link"
      >
        <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg">
          <Image src={Tatooine} alt="star wars poster" className="m-auto" />
          <h1 className="text-xl font-bold mb-2 text-center">{planet.name}</h1>

          <p className="text-white mb-1 text-center">
            Climate: {planet.climate}
          </p>

          <p className="text-white text-center">
            Population: {planet.population}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards}
      </div>
    </div>
  );
}
