import Image from "next/image";
import Link from "next/link";
import STARS from "../../../public/images/STARS.png"
async function collectMovie(episode_id) {
  const res = await fetch(`https://swapi.dev/api/films/${episode_id}`);
  return res.json();
}



export default async function Details({ params }) {
  const movie = await collectMovie(params.id);

  return (
    <main className="p-4">
      <Image
        src={STARS}
        alt="Stars"
        width={400}
        height={200}
        className="m-auto"
      />
      <h1 className="text-2xl font-extrabold mt-8 mb-4 text-center">
        {movie.title}
      </h1>
      <p className="text-center font-bold">Episode {movie.episode_id}</p>
      <p className="mb-4">{movie.opening_crawl}</p>
      <p className="text-center">Director: {movie.director}</p>
      <p className="text-center">Producer(s): {movie.producer}</p>

      <p className="text-center">
        Created: {movie.created} Edited: {movie.edited}
      </p>
    </main>
  );
}