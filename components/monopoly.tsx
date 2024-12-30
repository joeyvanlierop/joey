"use client"

import * as Tooltip from "@radix-ui/react-tooltip";
import React, { useMemo } from 'react';

interface Space {
  name: string;
  color: string | null;
  position?: 'corner' | 'side' | 'inner';
}

const COLOR_MAP: { [key: string]: string } = {
  'Brown': 'bg-amber-800 text-white',
  'Light Blue': 'bg-sky-400 text-white',
  'Pink': 'bg-pink-400 text-white',
  'Orange': 'bg-orange-500 text-white',
  'Red': 'bg-red-600 text-white',
  'Yellow': 'bg-yellow-500 text-black',
  'Green': 'bg-green-600 text-white',
  'Dark Blue': 'bg-blue-900 text-white',
  'Black': 'bg-mono-4 text-white',
  'Utility': 'bg-mono-8 text-white',
  'Other': 'bg-mono-12 text-black'
};

// Predefined spaces with position types
const SPACES: Space[] = [
  { name: "Go", color: "Other", position: 'corner' },
  { name: "Mediterranean Avenue", color: "Brown", position: 'side' },
  { name: "Community Chest", color: "Other", position: 'side' },
  { name: "Baltic Avenue", color: "Brown", position: 'side' },
  { name: "Income Tax", color: "Other", position: 'side' },
  { name: "Reading Railroad", color: "Black", position: 'side' },
  { name: "Oriental Avenue", color: "Light Blue", position: 'side' },
  { name: "Chance", color: "Other", position: 'side' },
  { name: "Vermont Avenue", color: "Light Blue", position: 'side' },
  { name: "Connecticut Avenue", color: "Light Blue", position: 'side' },
  { name: "Jail/Just Visiting", color: "Other", position: 'corner' },
  { name: "St. Charles Place", color: "Pink", position: 'side' },
  { name: "Electric Company", color: "Utility", position: 'side' },
  { name: "States Avenue", color: "Pink", position: 'side' },
  { name: "Virginia Avenue", color: "Pink", position: 'side' },
  { name: "Pennsylvania Railroad", color: "Black", position: 'side' },
  { name: "St. James Place", color: "Orange", position: 'side' },
  { name: "Community Chest", color: "Other", position: 'side' },
  { name: "Tennessee Avenue", color: "Orange", position: 'side' },
  { name: "New York Avenue", color: "Orange", position: 'side' },
  { name: "Free Parking", color: "Other", position: 'corner' },
  { name: "Kentucky Avenue", color: "Red", position: 'side' },
  { name: "Chance", color: "Other", position: 'side' },
  { name: "Indiana Avenue", color: "Red", position: 'side' },
  { name: "Illinois Avenue", color: "Red", position: 'side' },
  { name: "B&O Railroad", color: "Black", position: 'side' },
  { name: "Atlantic Avenue", color: "Yellow", position: 'side' },
  { name: "Ventnor Avenue", color: "Yellow", position: 'side' },
  { name: "Water Works", color: "Utility", position: 'side' },
  { name: "Marvin Gardens", color: "Yellow", position: 'side' },
  { name: "Go to Jail", color: "Other", position: 'corner' },
  { name: "Pacific Avenue", color: "Green", position: 'side' },
  { name: "North Carolina Avenue", color: "Green", position: 'side' },
  { name: "Community Chest", color: "Other", position: 'side' },
  { name: "Pennsylvania Avenue", color: "Green", position: 'side' },
  { name: "Short Line Railroad", color: "Black", position: 'side' },
  { name: "Chance", color: "Other", position: 'side' },
  { name: "Park Place", color: "Dark Blue", position: 'side' },
  { name: "Luxury Tax", color: "Other", position: 'side' },
  { name: "Boardwalk", color: "Dark Blue", position: 'side' }
];

function rollDice(): number {
  return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function calculateLandingPosition(startPosition: number, roll: number): number {
  const newPosition = (startPosition + roll) % SPACES.length;

  // If player lands on "Go to Jail", move them to "Jail"
  if (SPACES[newPosition].name === "Go to Jail") {
    return 10; // Position of "Jail" space
  }

  // Handle "Community Chest" cards
  if (SPACES[newPosition].name === "Community Chest") {
    const luck = Math.random()
    if (luck < 1 / 16) {
      return SPACES.findIndex(space => space.name === "Go"); // Advance to GO
    } else if (luck < 2 / 16) {
      return SPACES.findIndex(space => space.name === "Jail/Just Visiting"); // Go to Jail
    }
  }

  // Handle "Chance" spaces
  if (SPACES[newPosition].name === "Chance") {
    const luck = Math.random();
    if (luck < 1 / 16) {
      return SPACES.findIndex(space => space.name === "Go"); // Advance to GO
    } else if (luck < 2 / 16) {
      return SPACES.findIndex(space => space.name === "Jail/Just Visiting"); // Go to Jail
    } else if (luck < 3 / 16) {
      return SPACES.findIndex(space => space.name === "St. Charles Place"); // Go to St. Charles Place
    } else if (luck < 4 / 16) {
      return SPACES.findIndex(space => space.name === "Boardwalk"); // Go to Boardwalk
    } else if (luck < 5 / 16) {
      return SPACES.findIndex(space => space.name === "Reading Railroad"); // Go to Reading Railroad
    } else if (luck < 7 / 16) {
      // Go to next Railway
      const railways = SPACES.filter(space => space.color === "Black");
      return railways.findIndex(railway => SPACES.indexOf(railway) > newPosition) || 5
    } else if (luck < 8 / 16) {
      // Go to next Utility
      const utilities = SPACES.filter(space => space.color === "Utility");
      return utilities.findIndex(utility => SPACES.indexOf(utility) > newPosition) || 12
    } else if (luck < 10 / 16) {
      return newPosition - 3; // Go back 3 spaces
    }
  }

  return newPosition;
}

function simulateGame(): number[] {
  let currentPosition = 0; // Starting at "GO"
  const landCounts = new Array(SPACES.length).fill(0);

  // Simulate 30 rolls (average number per player)
  for (let i = 0; i < 30; i++) {
    const roll = rollDice();
    currentPosition = calculateLandingPosition(currentPosition, roll);
    landCounts[currentPosition]++;
  }

  return landCounts;
}

function simulateGames(simulations: number): number[] {
  const totalLandCounts = new Array(SPACES.length).fill(0);

  for (let i = 0; i < simulations; i++) {
    const gameCounts = simulateGame();
    for (let j = 0; j < SPACES.length; j++) {
      totalLandCounts[j] += gameCounts[j];
    }
  }

  const totalRolls = simulations * 30;
  return totalLandCounts.map(count => (count / totalRolls) * 100);
}

// Convert space index to grid index
function currentSpaceToGridIndex(spaceIndex: number): number {
  if (spaceIndex <= 10) {
    return spaceIndex
  } else if (spaceIndex % 11 === 10) {
    return 10 + Math.floor(spaceIndex / 11)
  } else if (spaceIndex % 11 === 0) {
    return 40 - spaceIndex / 11
  } else if (spaceIndex >= 110) {
    return 30 - spaceIndex + 110
  } else {
    return -1
  }
}

function sigmoidScale(x: number, center: number = 2.5, steepness: number = 15): number {
  const normalized = (x - center) / center;
  const sigmoid = 1 / (1 + Math.exp(-steepness * normalized));
  return 0.5 + sigmoid;
}


const Monopoly: React.FC = () => {
  const probabilities = useMemo(() => simulateGames(100000), []);

  const renderCell = (index: number) => {
    const gridIndex = currentSpaceToGridIndex(index);

    if (gridIndex === -1) {
      return (
        <div
          key={index}
          className="rounded-sm bg-mono-3 aspect-square"
        />
      );
    }

    const space = SPACES[gridIndex];
    const probability = probabilities[gridIndex] || 0;
    const colorClass = space.color ? COLOR_MAP[space.color] || 'bg-gray-200' : 'bg-white';
    const scale = probability ? Math.min(sigmoidScale(probability), 2) : 1;

    return (
      <Tooltip.Provider delayDuration={300} skipDelayDuration={0} key={index}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div
              className={`
                rounded-sm p-1 aspect-square
                flex flex-col items-center justify-center 
                text-center text-[10px] ${colorClass}
                relative aspect-square overflow-hidden
                cursor-pointer
              `}
            >
              <div
                className="truncate font-semibold text-base"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center'
                }}
              >
                {/* {probability > 0 ? probability.toFixed(2) : ''} */}
              </div>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content
            className="border border-border bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono tabular-nums"
            sideOffset={8}
            side={gridIndex < 11 ? "top" : gridIndex < 20 ? "right" : gridIndex < 31 ? "bottom" : "left"}
            align="center"
          >
            <div className="flex flex-col gap-1">
              <span className="font-header text-white">
                {probability.toFixed(2)}%
              </span>
            </div>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  };

  const gridCells = Array.from({ length: 11 * 11 }, (_, index) => renderCell(index));

  return (
    <div className="p-4 rounded-lg">
      <div className="grid grid-cols-11 gap-1 max-w-4xl mx-auto font-header tracking-tighter">
        {gridCells}
      </div>
      <div className="text-center mt-4 text-sm text-mono-8">
        Probabilities based on 1000 simulations of 30 dice rolls
      </div>
    </div>
  );
};

export default Monopoly;
