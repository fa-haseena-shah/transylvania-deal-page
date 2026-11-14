import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import deal from "./lib/deal-page-data.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero
          title={deal.title}
          image={deal.heroImages?.[0]}
          price={deal.price}
          originalPrice={deal.farePrice}
          priceType={deal.priceType}
        />
      </main>
    </>
  );
}