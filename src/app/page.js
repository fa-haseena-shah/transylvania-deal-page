import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import QuickLinks from "./ui/QuickLinks";
import Overview from "./ui/Overview";
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
        <QuickLinks />
        <Overview images={deal.overview.images} />
      </main>
    </>
  );
}