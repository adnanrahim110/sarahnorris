import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../../constant";

const Reviews = () => {
  return (
    <section className="bg-secondary-100" id="reviews">
      <div className="w-full px-3 mx-auto">
        <div className="row justify-between">
          <div className="pr-0 lg:w-3/12 max-md:text-center max-md:mb-10">
            <div className="flex h-full flex-col justify-center gap-2.5">
              <h2 className="title">What readers are saying</h2>
              <p>
                <em className="font-light">
                  Unlock the power of the Holy Spirit—step into divine peace,
                  purpose, and miracles today!
                </em>
              </p>
            </div>
          </div>
          <div className="lg:w-9/12">
            <div className="md:p-8">
              <div className="row gap-y-4">
                {[...Array(2)].map((_, carouselIdx) => {
                  const chunk =
                    carouselIdx === 0 ? reviews.slice(0, 3) : reviews.slice(3);

                  return (
                    <div key={carouselIdx} className="w-full">
                      <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: carouselIdx === 0 ? 2500 : 3000 }}
                        loop
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                          0: { slidesPerView: 1, autoplay: { delay: 2500 } },
                          768: { slidesPerView: 2 },
                        }}
                      >
                        {chunk.map((review, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="min-h-[280px] p-10 flex flex-col items-start justify-between rounded-lg bg-white">
                              <p>{review.comment}</p>
                              <div className="flex gap-6 items-center">
                                <img
                                  src={review.img}
                                  alt={review.name}
                                  className="w-12 h-12 rounded-full"
                                />
                                <div>
                                  <h5 className="text-lg">{review.name}</h5>
                                  <p className="m-0">{review.title}</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
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

export default Reviews;
