import CategoryBrowse from "../components/landingpage/CategoryBrowse";
import LandingHero from "../components/landingpage/LandingHero";
import LeaderBoard from "../components/landingpage/LeaderBoard";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hr from "../components/ui/Hr";

export default function Landing() {
  return (
    <>
      <Navbar />
      <LandingHero />
      <Hr />
      <CategoryBrowse />
      <Hr />
      <LeaderBoard />
      <Footer />
    </>
  )
}
