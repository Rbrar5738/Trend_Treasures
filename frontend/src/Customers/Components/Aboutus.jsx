import React from "react";

const Aboutus = () => {
  return (
    <div className="bg-gray-100 p-6 lg:p-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Trend Treasures
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <img
              src="https://media.istockphoto.com/id/1292443598/photo/flying-shopping-cart-with-shopping-bags-on-a-pink-background.jpg?s=612x612&w=0&k=20&c=sMJy_CYmuKtwXE8LCPI9lkyWEgB1lKfhuJg8hF48LyA="
              alt="Trend Treasures"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Trend Treasures, your ultimate destination for stylish
              and trendy clothing for both men and women. We are dedicated to
              bringing you the latest fashion trends and high-quality apparel
              that make you look and feel your best.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to provide a seamless online shopping experience
              with a wide range of products that cater to all your fashion
              needs. Whether you're looking for casual wear, office attire, or
              something special for an occasion, we have something for everyone.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At Trend Treasures, we believe that fashion is for everyone. We
              strive to offer inclusive sizing and styles that celebrate
              diversity and individuality. Our team works tirelessly to ensure
              that each item meets our high standards of quality and style.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for choosing Trend Treasures. We look forward to helping
              you express your unique style and discover your fashion treasures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
