"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [hoveringNo, setHoveringNo] = useState(false);

  const dinnerOptions = ["Seafood", "Mexican Food", "Ramen"];
  const afterDinnerOptions = ["Movies", "Drinks", "Bowling"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-pink-600">
      {!accepted ? (
        <div className="p-8 text-center border rounded-lg shadow-lg bg-pink-100">
          <h1 className="text-4xl font-bold mb-4">Will you be my Valentine?</h1>
          <div className="flex justify-center space-x-4">
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
          <h3 className="text-xl mb-2">Dinner Options:</h3>
          <ul className="list-disc list-inside mb-4">
            {dinnerOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <h3 className="text-xl mb-2">After Dinner Plans:</h3>
          <ul className="list-disc list-inside mb-4">
            {afterDinnerOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <p className="text-lg mt-6">Can’t wait to spend this Valentine’s Day with you ❤️</p>
        </div>
      )}
    </div>
  );
}
