import React from "react";

const Contactus = () => {
  return (
    // Contact us page
    <div className="bg-white p-6 lg:p-12 min-h-screen flex flex-col lg:flex-row">
      <div className="container mx-auto flex-grow flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:pr-8 flex flex-col">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>
          <div className="flex-grow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Address
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              32, Kent Street, Soutwood
              <br />
              Cambridge, Ontario N1S5B2
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Call Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">+1 (548) 577-8444</p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Email Us
            </h2>
            <p className="text-lg text-gray-700 mb-4">inbox.brar@gmail.com</p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg:pl-8 h-64 lg:h-auto flex-grow">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.284716828745!2d-79.8870815848472!3d43.25716198378273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a3c2dd24b91%3A0x4813e6a882c9276!2s32%20Kent%20St%2C%20Hamilton%2C%20ON%20L8R%201P1%2C%20Canada!5e0!3m2!1sen!2sus!4v1638456418583!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
