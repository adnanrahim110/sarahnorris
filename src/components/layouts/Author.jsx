import React from "react";
import { author } from "../../assets";
import { socialLinks } from "../../constant";

const Author = () => {
  return (
    <section id="author">
      <div className="w-full px-3 mx-auto">
        <div className="row items-center justify-between">
          <div className="md:w-5/12">
            <div className="relative overflow-hidden max-h-[490px]">
              <img
                src={author}
                className="w-full h-full object-cover object-bottom max-h-[500px]"
                alt=""
              />
            </div>
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <div className="flex h-full flex-col justify-center gap-2.5 text-center md:text-left">
              <h2 className="title mt-4 md:mt-0">About the Author</h2>
              <p>
                Sarah Norris is a devoted believer and teacher with a passion
                for helping others uncover the mysteries of the Holy Spirit.
              </p>
              <p>
                Drawing from years of spiritual growth, personal experiences,
                and biblical study, Sarah provides insightful and relatable
                guidance for readers. Her unique approach weaves heartfelt
                storytelling with a profound understanding of scripture, making
                even complex spiritual concepts accessible and engaging. With a
                focus on practical faith, Sarah encourages others to invite the
                Holy Spirit into their daily lives and experience God’s
                transformative power in a deeply personal way.
              </p>
              <div className="pb-3.5">
                <span className="block w-full h-px bg-transparent border border-secondary"></span>
              </div>
              <h2 className="text-[22px]">Sarah Norris</h2>
              <span>Author.</span>
              <div className="flex gap-5 items-center max-md:justify-center max-md:mt-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      href={social.url}
                      key={idx}
                      target="_blank"
                      className="flex items-center justify-center w-11 h-11 text-center text-[22px] text-white bg-secondary hover:bg-transparent border-2 border-secondary hover:text-secondary rounded-full"
                    >
                      <Icon className="leading-none" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
