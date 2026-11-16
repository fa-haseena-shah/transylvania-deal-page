import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import QuickLinks from "./ui/QuickLinks";
import Overview from "./ui/Overview";
import Itinerary from "./ui/Itinerary";
import Hotel from "./ui/Hotel";
import Destinations from "./ui/Destinations";
import Divider from "./ui/Divider";
import Excursions from "./ui/Excursions";
import Highlights from "./ui/Highlights";
import Payment from "./ui/Payment";
import Faq from "./ui/Faq";
import Testimonials from "./ui/Testimonials";
import FinePrint from "./ui/FinePrint";
import Footer from "./ui/Footer";
import EnquiryModal from "./ui/EnquiryModal";
import deal from "./lib/deal-page-data.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero
          title={deal.title}
          images={deal.heroImages}
          price={deal.price}
          originalPrice={deal.farePrice}
          priceType={deal.priceType}
        />
        <QuickLinks />
        <Overview
          images={deal.overview.images}
          content={deal.overview.content}
        />
        <Itinerary itineraries={deal.itineraries} />
        <Divider />
        <Hotel hotels={deal.hotels} />
        <Destinations
          dealDestination={deal.dealDestinations[0]}
          videoUrl={deal.secondaryVideoYoutubelink}
        />
        <Excursions content={deal.excursions} 
          defaultGroup={deal.dealDestinations?.[0]?.destination?.name} />
        <Highlights highlight={deal.highlight} />
        <Divider />
        <Payment content={deal.payment} />
        <Faq faqs={deal.dealFAQs} />
        <Testimonials />
        <hr></hr>
        <FinePrint content={deal.finePrint} />
        <Footer />
      </main>
      <EnquiryModal title={deal.title} />
    </>
  );
}