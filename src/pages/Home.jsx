import { Helmet } from "react-helmet-async";
import Author from "../components/layouts/Author";
import Book from "../components/layouts/Book";
import Donate from "../components/layouts/Donate";
import HowToBeSaved from "../components/layouts/HowToBeSaved";
import Reviews from "../components/layouts/Reviews";
import Hero from "../components/ui/Hero";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Sarah Norris</title>
      </Helmet>
      <Hero />
      <Author />
      <Book />
      <HowToBeSaved />
      <Reviews />
      <Donate />
    </>
  );
};

export default Home;
