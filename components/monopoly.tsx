"use client"

import React, { useState, useEffect } from 'react';

// Types
interface Space {
  name: string;
  color: string | null;
  position?: 'corner' | 'side' | 'inner';
}

// Color mapping
const COLOR_MAP: { [key: string]: string } = {
  'Brown': 'bg-amber-800 text-white',
  'Light Blue': 'bg-sky-400 text-white',
  'Pink': 'bg-pink-400 text-white',
  'Orange': 'bg-orange-500 text-white',
  'Red': 'bg-red-600 text-white',
  'Yellow': 'bg-yellow-500 text-black',
  'Green': 'bg-green-600 text-white',
  'Dark Blue': 'bg-blue-900 text-white',
  'Black': 'bg-gray-800 text-white',
  'Utility': 'bg-purple-600 text-white'
};

// Predefined spaces with position types
const SPACES: Space[] = [
  { name: "GO", color: null, position: 'corner' },
  { name: "Mediterranean Avenue", color: "Brown", position: 'side' },
  { name: "Community Chest", color: null, position: 'side' },
  { name: "Baltic Avenue", color: "Brown", position: 'side' },
  { name: "Income Tax", color: null, position: 'side' },
  { name: "Reading Railroad", color: "Black", position: 'side' },
  { name: "Oriental Avenue", color: "Light Blue", position: 'side' },
  { name: "Chance", color: null, position: 'side' },
  { name: "Vermont Avenue", color: "Light Blue", position: 'side' },
  { name: "Connecticut Avenue", color: "Light Blue", position: 'side' },
  { name: "Jail", color: null, position: 'corner' },
  { name: "St. Charles Place", color: "Pink", position: 'side' },
  { name: "Electric Company", color: "Utility", position: 'side' },
  { name: "States Avenue", color: "Pink", position: 'side' },
  { name: "Virginia Avenue", color: "Pink", position: 'side' },
  { name: "St. James Place", color: "Orange", position: 'side' },
  { name: "Tennessee Avenue", color: "Orange", position: 'side' },
  { name: "New York Avenue", color: "Orange", position: 'side' },
  { name: "Free Parking", color: null, position: 'corner' },
  { name: "Kentucky Avenue", color: "Red", position: 'side' },
  { name: "Indiana Avenue", color: "Red", position: 'side' },
  { name: "Illinois Avenue", color: "Red", position: 'side' },
  { name: "B&O Railroad", color: "Black", position: 'side' },
  { name: "Atlantic Avenue", color: "Yellow", position: 'side' },
  { name: "Ventnor Avenue", color: "Yellow", position: 'side' },
  { name: "Water Works", color: "Utility", position: 'side' },
  { name: "Marvin Gardens", color: "Yellow", position: 'side' },
  { name: "Go to Jail", color: null, position: 'corner' },
  { name: "Pacific Avenue", color: "Green", position: 'side' },
  { name: "North Carolina Avenue", color: "Green", position: 'side' },
  { name: "Pennsylvania Avenue", color: "Green", position: 'side' },
  { name: "Short Line Railroad", color: "Black", position: 'side' },
  { name: "Park Place", color: "Dark Blue", position: 'side' },
  { name: "Luxury Tax", color: null, position: 'side' },
  { name: "Boardwalk", color: "Dark Blue", position: 'side' }
];

// Simulate game probabilities (simplified from previous version)
function simulateGames(simulations: number): number[] {
  const totalLandCounts = new Array(36).fill(0);
  const spacesCount = SPACES.length;

  for (let i = 0; i < simulations; i++) {
    let currentPosition = 0;
    for (let j = 0; j < 30; j++) {
      const roll = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
      currentPosition = (currentPosition + roll) % spacesCount;

      // Simple landing tracking
      totalLandCounts[currentSpaceToGridIndex(currentPosition)]++;
    }
  }

  const totalRolls = simulations * 30;
  return totalLandCounts.map(count => (count / totalRolls) * 100);
}

// Convert space index to grid index
function currentSpaceToGridIndex(spaceIndex: number): number {
  const boardCorners = [0, 10, 20, 30];
  const sideLength = 11;

  if (boardCorners.includes(spaceIndex)) {
    // Map corners
    return [0, 10, 120, 130][boardCorners.indexOf(spaceIndex)];
  }

  // Sides
  if (spaceIndex < 10) return spaceIndex + 1;
  if (spaceIndex < 20) return (sideLength * 1) + (20 - spaceIndex);
  if (spaceIndex < 30) return (sideLength * 10) + (spaceIndex - 20 + 1);
  return (sideLength * 11) - (spaceIndex - 30);
}

// Monopoly Component
const Monopoly: React.FC = () => {
  const [probabilities, setProbabilities] = useState<number[]>([]);

  useEffect(() => {
    const simulatedProbabilities = simulateGames(1000);
    setProbabilities(simulatedProbabilities);
  }, []);

  // Render grid cells
  const renderCell = (index: number) => {
    // Find the corresponding space (if any)
    const spaceIndex = SPACES.findIndex(
      (_, spaceIdx) => currentSpaceToGridIndex(spaceIdx) === index
    );

    if (spaceIndex === -1) {
      return (
        <div
          key={index}
          className="rounded-sm bg-mono-3 aspect-square"
        />
      );
    }

    const space = SPACES[spaceIndex];
    const probability = probabilities[index] || 0;
    const colorClass = space.color ? COLOR_MAP[space.color] || 'bg-gray-200' : 'bg-white';

    return (
      <div
        key={index}
        className={`
                    rounded-sm p-1 aspect-square
                    flex flex-col items-center justify-center 
                    text-center text-[10px] ${colorClass}
                    relative
                `}
      >
        <div className="truncate font-semibold text-xl">
          {probability > 0 ? probability.toFixed(1) : ''}
        </div>
      </div >
    );
  };

  // Create an array of 121 cells (11x11 grid)
  const gridCells = Array.from({ length: 121 }, (_, index) => renderCell(index));

  return (
    <div className="p-4 rounded-lg">
      <div className="grid grid-cols-11 gap-1 max-w-4xl mx-auto">
        {gridCells}
      </div>
      <div className="text-center mt-4 text-sm text-mono-8">
        Probabilities based on 1000 simulations of 30 dice rolls
      </div>
    </div>
  );
};

export default Monopoly;