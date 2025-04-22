import React from "react";
import Button from "../ui/Button";

const Donate = ({ bg }) => {
  return (
    <section id="give" className={bg}>
      <div className="w-full px-3 mx-auto">
        <div className="row justify-center items-center text-center">
          <div className="lg:w-9/12">
            <span className="subtitle">Donate</span>
            <h2 className="title">
              Your generous donations help us continue our ministry. Click below
              to give.
            </h2>
            <div className="mt-10">
              <Button children="Donate Now" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
