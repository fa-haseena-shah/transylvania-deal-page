import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import QuickLinks from "./ui/QuickLinks";
import Overview from "./ui/Overview";
import Itinerary from "./ui/Itinerary";
import Divider from "./ui/Divider";
import deal from "./lib/deal-page-data.json";

const itineraryItems = deal.itineraries.map(({ id, day, content }) => {
  const heading = content.match(/<p>\s*<strong>(.*?)<\/strong>.*?<\/p>/i);

  if (!heading) {
    throw new Error(`Itinerary day ${day} is missing its heading.`);
  }

  return {
    id,
    label: `DAY ${day}`,
    title: heading[1].replace(/&nbsp;/g, " ").trim(),
    contentHtml: content.replace(heading[0], ""),
  };
});

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
        <Overview
          images={deal.overview.images}
          content={deal.overview.content}
        />
        <Itinerary 
          items={itineraryItems} 
        />
        <Divider />
      </main>
    </>
  );
}