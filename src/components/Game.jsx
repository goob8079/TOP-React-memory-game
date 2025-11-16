import { useEffect, useState } from "react";
import { Card } from "./Card";
import { cardData } from "./cardData";

export function Game({ reset, endRound, increaseScore }) {
    // location is initially set to an array of the cardData's indexes
    const [locations, setLocations] = useState(
        cardData.map((value, index) => index)
    );
    const [clickedCards, setClickedCards] = useState(new Set());

    // Fisher-Yates shuffle
    function shuffleArray(arr) {
        let a = arr.slice(0);

        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // swap the elements at i and j
            [a[i], a[j]] = [a[j], a[i]];
        }

        return a;
    }

    function randomizeLocation() {
        setLocations(shuffleArray(locations));
    }

    function handleCardClick(name) {
        if (clickedCards.has(name)) {
            endRound();
            return;
        }

        setClickedCards(prev => new Set(prev).add(name));
        increaseScore();
        randomizeLocation();
    }

    function resetGame() {
        setClickedCards(new Set())
    }

    return (
        <div className="game-grid">
            {locations.map((location) => {
                return (
                    <Card 
                        key={cardData[location].id}
                        img={cardData[location].img}
                        name={cardData[location].name}
                        isClicked={clickedCards.has(cardData[location].name)}
                        onClick={() => handleCardClick(cardData[location].name)}
                    />
                );
            })}
        </div>
    )
}