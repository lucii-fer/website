import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-32 h-[900px]">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-2 mb-6">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Award-Winning Design
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to QiweckSolutions
        </h1>
        <p className="text-lg md:text-xl mb-4">
        We specialize in delivering innovative AI solutions to elevate your business.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Our mission is to empower businesses with cutting-edge technology and
          expert insights, ensuring your success in today’s competitive
          landscape.
        </p>

        <div className="flex justify-center space-x-4">
          <a
            href="#services"
            className="bg-white hover:bg-gray-200 text-blue-600 font-semibold py-2 px-4 rounded"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="mt-16">
        <img src={"/images/hero.png"} alt="Hero Image" width={"2000"} height={"2000"} className="w-full max-w-4xl mx-auto" />
      </div>
    </section>
  );
}
