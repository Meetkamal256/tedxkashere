import HeroSection from "./components/sections/hero/HeroSection";
import Intro from "./components/intro/Intro";
import FeaturedSpeakers from "./components/featuredSpeakers/FeaturedSpeakers";
import EventInfo from "./components/eventInfo/EventInfo";
import Sponsors from "./components/sponsors/Sponsors";
import Newsletter from "./components/sections/newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <FeaturedSpeakers />
      <EventInfo />
      <Sponsors />
      <Newsletter />
    </>
  );
}
