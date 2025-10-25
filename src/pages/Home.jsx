import Banner from "../components/Banner";
import FeaturedFoods from "./Foods/FeaturedFood";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import OurImpact from "../components/OurImpact";
import OurMission from "../components/OurMission";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <OurMission></OurMission>
      <OurImpact></OurImpact>
      <Newsletter></Newsletter>

      <Footer></Footer>
    </>
  );
};

export default Home;
