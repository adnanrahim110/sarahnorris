import { Helmet } from "react-helmet-async";
import Author from "../components/layouts/Author";
import Book from "../components/layouts/Book";
import Donate from "../components/layouts/Donate";
import HowToBeSaved from "../components/layouts/HowToBeSaved";
import Reviews from "../components/layouts/Reviews";
import Button from "../components/ui/Button";
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

      <section className="py-14 bg-primary-50/50">
        <div className="w-full px-3 mx-auto">
          <div className="row justify-between items-center">
            <div className="lg:w-5/12 max-md:text-center">
              <div>
                <h2 className="title mb-4">Contact & Prayer Requests</h2>
                <p>We would love to hear from you and pray for you.</p>
              </div>
            </div>
            <div className="lg:w-6/12">
              <form className="bg-primary-50/20 p-7 border border-primary-300 rounded-md c_form">
                <div className="row gap-y-4">
                  <div className="w-full">
                    <input type="text" name="name" placeholder="Your Name" />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="w-full">
                    <textarea
                      rows={7}
                      name="name"
                      placeholder="Your Prayer Request"
                      className="h-full"
                    />
                  </div>
                  <div className="w-full">
                    <Button children="send now" className="w-full rounded-lg" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Donate />
    </>
  );
};

export default Home;
