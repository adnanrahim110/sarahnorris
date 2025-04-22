import React from "react";
import Donate from "../components/layouts/Donate";
import Button from "../components/ui/Button";

const ContactPrayers = () => {
  return (
    <>
      <section className="pt-[150px] pb-0 bg-secondary-100">
        <div className="w-full px-3 mx-auto">
          <div className="row">
            <div className="w-full">
              <div className="h-full flex flex-col items-center justify-center pb-[100px] max-md:text-center">
                <span className="subtitle">contact & prayers</span>
                <h1 className="title mb-4">Contact Me For Prayers</h1>
                <p>
                  A guide to unlocking the gifts of the Holy Spirit and living a
                  life of faith and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
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
      <Donate bg="bg-secondary-50" />
    </>
  );
};

export default ContactPrayers;
