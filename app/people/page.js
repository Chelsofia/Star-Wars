"use client";
import Link from "next/link";
import Image from "next/image";
import jar from "../../public/images/jar.jpg";
import { useEffect, useState } from "react";

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    handleFetch();
  }, []);

  function handleFetch() {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
      });
  }

  const cards = people.map((person) => {
    return (
      <Link
        key={person.url}
        href={`/people/${encodeURIComponent(
          person.url.split("/").slice(-2, -1)[0]
        )}`}
        className="card-link"
      >
        <div className="flex flex-col items-center justify-center p-4 border rounded-none shadow-lg">
          <Image
            src={jar}
            alt="Star Wars poster"
            className="w-32 h-32 object-cover mb-4"
          />
          <h1 className="text-xl font-bold text-center mb-2 text-gray-950">
            {person.name}
          </h1>
          <p className="text-gray-800 text-center mb-2">
            Birth Year: {person.birth_year}
          </p>
          <h3 className="text-gray-800 text-center mb-2">
            Gender: {person.gender}
          </h3>
          <h2 className="text-gray-800 text-center">Species: {person.species}</h2>
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
