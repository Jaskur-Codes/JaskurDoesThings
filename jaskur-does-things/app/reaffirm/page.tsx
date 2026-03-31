"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function ReaffirmPage() {
  const defaultAffirmations = [
    "I am capable of achieving my goals.",
    "I am improving every day.",
    "I deserve success and happiness.",
    "I am confident and strong.",
    "I can handle whatever comes my way.",
  ];

  const router = useRouter();

  const [affirmations, setAffirmations] = useState(defaultAffirmations);
  const [currentAffirmation, setCurrentAffirmation] =
    useState("Tap to Re:Affirm");

  const [isOpen, setIsOpen] = useState(false);
  const [newAffirmation, setNewAffirmation] = useState("");

  // 📦 Load from localStorage (on mount)
  useEffect(() => {
    const stored = localStorage.getItem("affirmations");

    if (stored) {
      setAffirmations(JSON.parse(stored));
    }
  }, []);

  // 💾 Save to localStorage (whenever affirmations change)
  useEffect(() => {
    localStorage.setItem("affirmations", JSON.stringify(affirmations));
  }, [affirmations]);

  // 🎯 Generate affirmation
  const handleReaffirm = () => {
    if (affirmations.length === 0) return;

    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentAffirmation(affirmations[randomIndex]);
  };

  // ➕ Add affirmation
  const handleAddAffirmation = () => {
    const trimmed = newAffirmation.trim();
    if (!trimmed) return;
    if (affirmations.includes(trimmed)) return;

    setAffirmations((prev) => [...prev, trimmed]);
    setCurrentAffirmation(trimmed);

    setNewAffirmation("");
    setIsOpen(false);
  };

  return (
    <main className="flex flex-col h-screen">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-center flex-1">
          Pause. Breathe. Re:Affirm
        </h1>
        <button
          onClick={() => router.push("/")}
          className="text-2xl hover:opacity-70"
        >
          ←
        </button>
      </div>

      <div className="flex-1 grid place-items-center px-6">
        <div className="grid gap-6 text-center justify-items-center max-w-xl w-full">
          <p className="text-2xl md:text-4xl font-semibold">
            {currentAffirmation}
          </p>

          <div className="flex gap-4">
            <button
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
              onClick={() => setIsOpen(true)}
            >
              Add Affirmation
            </button>

            <button
              className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500"
              onClick={handleReaffirm}
            >
              Re:Affirm
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-4">
              Add a new affirmation
            </h2>

            <textarea
              className="w-full border rounded p-2 mb-4"
              rows={3}
              value={newAffirmation}
              onChange={(e) => setNewAffirmation(e.target.value)}
              placeholder="Type your affirmation..."
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAddAffirmation}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
