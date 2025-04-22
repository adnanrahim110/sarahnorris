import React from "react";
import { bookbanner } from "../../assets";
import Button from "../ui/Button";

const Book = () => {
  return (
    <section id="book" className="bg-secondary-50">
      <div className="w-full px-3 mx-auto">
        <div className="row flex-col-reverse lg:flex-row items-center justify-between ">
          <div className="lg:w-6/12">
            <div className="flex h-full flex-col justify-center gap-2.5 max-md:text-center max-md:mt-10">
              <span className="subtitle">About the Book</span>
              <h2 className="title max-md:mb-4">
                The Holy Spirit: God’s Gift for You
              </h2>
              <p>
                The Holy Spirit: God’s Gift for You is not just a book; it is a
                companion for anyone seeking to walk more closely with God.
                Through this work, Sarah Norris shares how the Holy Spirit
                operates in our lives—providing comfort, guidance, and even
                enabling miraculous experiences. Readers will discover practical
                tips for discerning God’s will, developing spiritual gifts, and
                overcoming challenges through faith. With a focus on love,
                peace, and divine timing, this book offers tools to deepen your
                relationship with God and unlock blessings such as peace,
                confidence, and divine purpose.
              </p>
              <div>
                <Button children="buy now" />
              </div>
            </div>
          </div>
          <div className="lg:w-6/12">
            <div className="relative overflow-hidden max-h-[450px]">
              <img
                src={bookbanner}
                className="w-full h-full object-cover object-center max-h-[450px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
