import Banner from "../components/Banner";
import FeaturedFoods from "./Foods/FeaturedFood";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <FeaturedFoods></FeaturedFoods>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>

      <Footer></Footer>
    </>
  );
};

export default Home;
