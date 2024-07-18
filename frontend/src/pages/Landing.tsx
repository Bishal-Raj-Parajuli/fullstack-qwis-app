import CategoryBrowse from "../components/CategoryBrowse";
import LandingHero from "../components/LandingHero";
import LeaderBoard from "../components/LeaderBoard";
import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <CategoryBrowse />
      <LeaderBoard />
    </>
  )
}
