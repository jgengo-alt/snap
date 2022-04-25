import Navbar from "../components/navbar";
import Clients from "../components/clients";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container flex flex-col lg:container lg:mx-auto lg:flex-row-reverse">
        <picture>
          <source media="(min-width: 1024px)" srcSet="image-hero-desktop.png" />
          <img src="image-hero-mobile.png" />
        </picture>

        <Hero />
      </div>
    </div>
  );
}
