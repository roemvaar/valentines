"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [hoveringNo, setHoveringNo] = useState(false);
  const [selectedDinner, setSelectedDinner] = useState("");
  const [selectedDessert, setSelectedDessert] = useState("");
  const [selectedAfterDinner, setSelectedAfterDinner] = useState("");

  const dinnerOptions = ["Seafood", "Mexican Food", "Ramen"];
  const dessertOptions = ["Ice Cream", "Cake", "Chocolate Fondue"];
  const afterDinnerOptions = ["Movies", "Drinks", "Bowling"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-pink-600">
      {!accepted ? (
        <div className="p-8 text-center border rounded-lg shadow-lg bg-pink-100">
          <h1 className="text-4xl font-bold mb-4">Will you be my Valentine?</h1>

          {/* 📸 Display the Monterrey image */}
          <Image
            src="/monterrey.jpg"
            alt="A beautiful memory in Monterrey"
            width={300}
            height={200}
            className="rounded-lg shadow-lg mt-4 mx-auto"
          />

          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setAccepted(true)}
              className="px-6 py-2 bg-pink-500 hover:bg-pink-700 text-white font-bold rounded-lg"
            >
              Yes
            </button>
            <motion.div
              onHoverStart={() => setHoveringNo(true)}
              onHoverEnd={() => setHoveringNo(false)}
              animate={{ x: hoveringNo ? 100 : 0 }}
            >
              <button className="px-6 py-2 bg-gray-300 text-gray-700 font-bold rounded-lg">
                No
              </button>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="p-8 border rounded-lg shadow-lg bg-pink-100">
          <h2 className="text-2xl font-semibold mb-4">Yay! Let’s plan our date 💖</h2>

          {/* 📸 Display the Seneca image */}
          <Image
            src="/seneca.png"
            alt="A special moment at Seneca"
            width={300}
            height={200}
            className="rounded-lg shadow-lg mt-4 mx-auto"
          />

          {/* Dinner Selection */}
          <h3 className="text-xl mt-6">Choose our Dinner Option:</h3>
          <div className="flex space-x-4 mt-2">
            {dinnerOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedDinner(option)}
                className={`px-4 py-2 rounded-lg border font-semibold shadow-md transition-all 
                  ${selectedDinner === option ? "bg-pink-500 text-white" : "bg-white text-pink-700 border-pink-500 hover:bg-pink-100"}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedDinner && (
            <p className="mt-4 text-lg font-semibold">Great choice! 🍽️ We’ll have: {selectedDinner}</p>
          )}

          {/* Dessert Selection */}
          <h3 className="text-xl mt-6">Choose our Dessert Option:</h3>
          <div className="flex space-x-4 mt-2">
            {dessertOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedDessert(option)}
                className={`px-4 py-2 rounded-lg border font-semibold shadow-md transition-all 
                  ${selectedDessert === option ? "bg-pink-500 text-white" : "bg-white text-pink-700 border-pink-500 hover:bg-pink-100"}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedDessert && (
            <p className="mt-4 text-lg font-semibold">Sounds tasty! 🍦 Let's have: {selectedDessert}</p>
          )}

          {/* After Dinner Selection */}
          <h3 className="text-xl mt-6">What should we do after dinner?</h3>
          <div className="flex space-x-4 mt-2">
            {afterDinnerOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedAfterDinner(option)}
                className={`px-4 py-2 rounded-lg border font-semibold shadow-md transition-all 
                  ${selectedAfterDinner === option ? "bg-pink-500 text-white" : "bg-white text-pink-700 border-pink-500 hover:bg-pink-100"}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAfterDinner && (
            <p className="mt-4 text-lg font-semibold">Sounds fun! 🎉 We’ll do: {selectedAfterDinner}</p>
          )}

          <p className="text-lg mt-6">Can’t wait to spend this Valentine’s Day with you ❤️</p>
        </div>
      )}
    </div>
  );
}
