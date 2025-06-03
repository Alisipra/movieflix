import React from 'react';
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiThemoviedatabase } from "react-icons/si";

const page = () => {
  return (
    <div className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        
        {/* Card 1 */}
        <div className="w-full sm:w-[45%] lg:w-[30%] bg-amber-300 p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-center text-5xl text-black mb-4">
            <RiMovie2Fill />
          </div>
          <h1 className="text-center text-2xl font-bold mb-2">Movie Discovery</h1>
          <p className="text-justify text-base mb-4">
            Explore a vast collection of movies by genre, language, year, or popularity. Find new favorites with ease.
          </p>
          <div className="text-center">
            <button className="bg-black hover:bg-green-400 text-white py-2 px-6 rounded-xl transition duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[45%] lg:w-[30%] bg-amber-300 p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-center text-5xl text-black mb-4">
            <SiThemoviedatabase />
          </div>
          <h1 className="text-center text-2xl font-bold mb-2">Smart Search & Filters</h1>
          <p className="text-justify text-base mb-4">
            Quickly find movies, actors, or directors using powerful search and filter options tailored to your preferences.
          </p>
          <div className="text-center">
            <button className="bg-black hover:bg-green-400 text-white py-2 px-6 rounded-xl transition duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[45%] lg:w-[30%] bg-amber-300 p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-center text-5xl text-black mb-4">
            <BiSolidCameraMovie />
          </div>
          <h1 className="text-center text-2xl font-bold mb-2">Multi-Platform Access</h1>
          <p className="text-justify text-base mb-4">
            Access our movie platform from any device — desktop, tablet, or smartphone — with a smooth, responsive experience.
          </p>
          <div className="text-center">
            <button className="bg-black hover:bg-green-400 text-white py-2 px-6 rounded-xl transition duration-300">
              Read More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
