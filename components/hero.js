import Clients from "./clients";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-20 lg:justify-between lg:gap-0">
      <div className="mx-auto text-center lg:w-full lg:text-left">
        <h1 className="mt-20 text-3xl font-bold md:text-7xl">
          Make&nbsp;
          <br className="hidden lg:block" />
          remote work
        </h1>
        <p className="py-4 px-4 text-black/70 lg:px-0 lg:py-10 lg:pr-28">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="rounded-2xl border-2 border-black bg-black py-3.5 px-6 text-white hover:bg-transparent hover:text-black">
          Learn more
        </button>
      </div>
      <Clients />
    </div>
  );
}
