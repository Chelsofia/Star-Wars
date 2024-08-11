import Image from "next/image";
import logo from "../public/images/gray.jpeg";

export default function Home() {
  return (
    <main className="p-4">
      <section>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-10">
          <Image
            alt="Star Wars" // Ensure alt text is descriptive and meaningful
            src={logo}
            placeholder="blur"
            quality={100}
            className="w-full md:w-[70%] rounded-lg"
          />
          <div className="flex-1">
            <p className="text-center md:text-left text-lg md:text-xl tracking-wider">
              In a galaxy far, far away... A young farm boy named Luke Skywalker
              becomes the unlikely hero of a rebellion against the evil Empire
              and its powerful leader, Darth Vader. With the help of wise Jedi
              Master Obi-Wan Kenobi, cocky pilot Han Solo, and feisty Princess
              Leia, Luke embarks on a thrilling adventure to destroy the
              deadliest weapon, the Death Star, and claim his destiny
              as a legendary Jedi Knight.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
