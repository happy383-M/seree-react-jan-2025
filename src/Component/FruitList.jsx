import React, { useState } from "react";
import "./styles.css";

function FruitList({ fruits }) {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleFruitClick = (fruit) => {
    setSelectedFruit(fruit); // Set the clicked fruit as the selected fruit
  };

  return (
    <div className="fruitlist-container">
      <ol>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            onClick={() => handleFruitClick(fruit)}
            className="fruit-item"
          >
            {fruit.name}
          </li>
        ))}
      </ol>

      {selectedFruit && (
        <div className="fruit-details">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default FruitList;