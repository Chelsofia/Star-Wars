"use client";
import Link from "next/link";
import Card from "../components/card";
import { useEffect, useState } from "react";

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    handleFetch();
  }, []);
  console.log(movies);

  function handleFetch() {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }

  const cards = movies.map((item) => {
    return (
      <Link
        key={item.episode_id}
        href={`/films/${item.episode_id}`}
        className="card-link"
      >
        <Card
          id={item.episode_id}
          overview={item.opening_crawl}
          popularity={item.popularity}
          release_date={item.release_date}
          title={item.title}
        />
      </Link>
    );
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards}
      </div>
    </div>
  );
}
