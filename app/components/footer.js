export default function Footer() {
  return (
    <div className="bg-[#f59e0b] flex flex-col items-center justify-center py-4">
      <p className="text-center mb-2 text-sm md:text-base">
        &copy; 2024 StarWars Inc.
      </p>
      <p className="text-center text-sm md:text-base">
        Designed by{" "}
        <a href="https://github.com/chelsofia" className="text-red-500">
          Chelsofia
        </a>
      </p>
    </div>
  );
}
