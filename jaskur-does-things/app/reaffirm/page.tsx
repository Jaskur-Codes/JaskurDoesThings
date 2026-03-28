"use client";

import { useState } from "react";
import "./reaffirm.css";
import "../globals.css";

export default function ReaffirmPage() {
    const affirmations = [
        "I am capable of achieving my goals.",
        "I am improving every day.",
        "I deserve success and happiness.",
        "I am confident and strong.",
        "I can handle whatever comes my way.",
    ];

    const [currentAffirmation, setCurrentAffirmation] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleReaffirm = () => {
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        setCurrentAffirmation(affirmations[randomIndex]);
    };

    return (
        <main className="flex flex-col items-center" style={{ padding: "20px" }}>
            <h1>Re:Affirm</h1>

            <div className="reaffirmBody flex flex-col items-center">
                {/* Input field */}
                <input
                    className="affirmationInput"
                    type="text"
                    placeholder="Write your own affirmation..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                {/* Output */}
                {currentAffirmation && (
                    <p className="affirmationText" style={{ marginTop: "20px", fontSize: "18px" }}>
                        {currentAffirmation}
                    </p>
                )}

                {/* Button */}
                <button className="reaffirmButton" onClick={handleReaffirm} style={{ marginLeft: "10px" }}>
                    Re:Affirm
                </button>
            </div>
        </main>
    );
}