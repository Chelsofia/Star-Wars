import Image from "next/image";
import STARS from "../../public/images/STARS.png";
export default function Card(props) {

  return (
    <main>
      <div className="border-2 rounded-2xl w-full p-8 mt-10">
        <Image src={STARS} alt="star wars poster" className="m-auto" /> <br />
        <h1 className="font-extrabold text-xl text-center">{props.title}</h1>
        <p className="text-center font-semibold">EPISODE {props.id}</p>
        <p className="text-center">{props.overview}</p>
        <p className="text-center font-semibold">
          RELEASE DATE: {props.release_date}
        </p>
      </div>

    </main>
  );
}