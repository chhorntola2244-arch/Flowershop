import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-200 py-16 text-center">
        <h1 className="text-6xl font-bold text-slate-800">About Us</h1>
        <p className="text-xl text-slate-600 mt-4">
          Learn more about our Flower Shop
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://i.pinimg.com/736x/08/9c/14/089c147fa719bd6d21b78fdff0aee0d3.jpg"
              alt="Beautiful flowers"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Welcome to Our Flower Shop
            </h2>

            <p className="text-lg text-gray-600 leading-8 mb-5">
              Welcome to our Flower Shop! We provide beautiful and fresh
              flowers for every special moment in your life.
            </p>

            <p className="text-lg text-gray-600 leading-8 mb-5">
              From romantic roses to colorful bouquets, our flowers are
              carefully selected to bring happiness, love, and beauty to
              every occasion.
            </p>
            <p className="text-lg text-gray-600 leading-8">
              Our goal is to make every customer happy with beautiful flowers
              and excellent service.
            </p>
            <div className="mt-3">
              <Link to="/shop" className="mt-8 bg-pink-500 hover:bg-pink-600 text-white
              px-8 py-3 rounded-full text-lg font-semibold transition">
                Shop Now
              </Link>
            </div>


          </div>

        </div>
      </div>

      {/* Features */}
      <div className="bg-pink-50 py-16">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
          Why Choose Us?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-5xl mb-4">🌹</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Fresh Flowers
            </h3>
            <p className="text-gray-600">
              We provide fresh and beautiful flowers every day.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-5xl mb-4">💝</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Beautiful Gifts
            </h3>
            <p className="text-gray-600">
              Perfect flowers for birthdays, weddings and special occasions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              We deliver your flowers safely and quickly.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;