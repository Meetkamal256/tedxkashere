import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/sections/hero/HeroSection";
import Intro from "./components/intro/Intro";
import FeaturedSpeakers from "./components/featuredSpeakers/FeaturedSpeakers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Intro />
      <FeaturedSpeakers />
    </>
  );
}
