import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/log.jpg";
import backgroundImage from "../assets/background.jpg";

const events = {
  Technical: [
    "Bug Hunters", "Code Titans", "Web Stack", "Mind Wars",
    "Speed Hackers", "Robo Rumble", "Setu Shrishti", "Discord of Minds",
    "Junk Yard", "Rubik’s Ruckus", "Inceptive Arena", "Design Flux",
    "BGMI", "Riddle Masters", "Medi Quest", "Lens Master",
    "Futuristic Fiction Writing", "Circuit Design",
    "Science Exhibition (Senior)", "Science Exhibition (Junior)",
    "Free Fire", "Tech Tambola"
  ],
  Cultural: [
    "Evocation", "Gigwar", "Joke-A-Palooza", "Trash to Treasure",
    "Dumb Charades", "Artistic Makeup", "Traditional Trivia",
    "Vo-Phy Aking", "Ziggurat", "Cinestaa"
  ],
  Sports: [
    "HU-TU-TU", "Soccer", "Court Ball", "Net Ball", "The Game of Kings",
    "Finger Billiards", "Shuttle-Cork", "Touch & Go", "Explosive Run",
    "Vertical Leap", "Horizontal Leap", "Disc Hurl", "Power Throw", "Ping-Pong"
  ],
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-black">
      {/* Navbar */}
      <nav className="absolute top-0 w-full p-4 flex justify-between items-center text-white text-lg bg-black shadow-md z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-2" />
          <div className="font-bold text-2xl">PARAMPARA 2025</div>
        </div>
        <ul className="flex gap-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
          <li className="hover:underline cursor-pointer">Updates</li>
        </ul>
      </nav>

      {/* Background Image */}
      <div className="absolute top-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Event Categories */}
      <div className="relative z-10 pt-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-80" >
          {Object.entries(events).map(([category, eventList]) => (
            <div
            key={category}
            className="p-6 rounded-xl shadow-lg w-80 transform animate-float relative overflow-hidden"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(10px)" }}
          >
          
              <h2 className="text-xl font-bold mb-4">{category}</h2>
              <ul className="list-disc pl-4">
                {eventList.slice(0, 5).map((event, index) => (
                  <li key={index} className="text-black-700">{event}</li>
                ))}
              </ul>
              <button 
                onClick={() => navigate(`/${category.toLowerCase()}`)}
                className="mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
