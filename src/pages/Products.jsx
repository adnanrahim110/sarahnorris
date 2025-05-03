import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { products } from "../constant";

const Products = () => {
  const [modalUrl, setModalUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (url) => {
    setModalUrl(url);
    setIsOpen(true);
  };
  const closeModal = () => {
    setModalUrl("");
    setIsOpen(false);
  };
  return (
    <>
      <Helmet>
        <title>Products - Sarah Norris</title>
      </Helmet>
      <section className="pt-[150px] pb-0 bg-secondary-100">
        <div className="w-full px-3 mx-auto">
          <div className="row">
            <div className="w-full">
              <div className="h-full flex flex-col items-center justify-center pb-[100px] text-center">
                <span className="subtitle">Inspiring Hope & Faith</span>
                <h1 className="title mb-4">Explore My Collection</h1>
                <p className="max-w-5xl">
                  Welcome to Sarah Norris’ curated shop of Christian gifts and
                  resources. From beautifully crafted scripture magnets and
                  uplifting greeting cards to enriching devotionals and
                  keepsakes, each item is thoughtfully chosen to bring
                  encouragement into your daily walk of faith. Find the perfect
                  gift to inspire yourself or uplift someone you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map(({ id, title, image, url }) => (
              <div key={id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-70 blur transition-opacity duration-300"></div>
                <div className="relative flex flex-col bg-secondary-200 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                  <div className="overflow-hidden h-48 sm:h-56 md:h-64">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4 line-clamp-2">
                      {title}
                    </h3>
                    <button
                      onClick={() => openModal(url)}
                      className="mt-auto inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 bg-primary-600 text-white rounded-full text-sm sm:text-base font-medium group-hover:bg-primary-700 transition-colors duration-300"
                    >
                      <FiShoppingCart className="mr-2 text-lg sm:text-xl" />
                      Buy on Amazon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs bg-opacity-60"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <FiX size={24} />
            </button>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
              Proceed to Amazon
            </h2>
            <p className="mb-6 text-sm sm:text-base text-gray-700 text-center">
              You’re about to leave this site and head to Amazon to complete
              your purchase.
            </p>
            <a
              href={modalUrl}
              onClick={closeModal}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center px-4 py-2 sm:px-5 sm:py-3 bg-yellow-500 text-white font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300"
            >
              Go to Amazon ▶
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
