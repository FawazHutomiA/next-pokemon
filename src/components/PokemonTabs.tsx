"use client";

import { useState } from "react";
import PokemonAbout from "./PokemonAbout";
import PokemonStats from "./PokemonStats";
import PokemonMoves from "./PokemonMoves";
import PokemonEvolution from "./PokemonEvolution";

type Props = {
  about: {
    species: string;
    height: number;
    weight: number;
    abilities: string[];
  };
  stats: { base_stat: number; stat: { name: string } }[];
  moves: string[];
  evolution: any;
};

const tabs = ["About", "Base Stats", "Moves", "Evolution"];

export default function PokemonTabs({ about, stats, moves, evolution }: Props) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="animate-fadeIn">
        {activeTab === "About" && (
          <PokemonAbout
            species={about.species}
            height={about.height}
            weight={about.weight}
            abilities={about.abilities}
          />
        )}
        {activeTab === "Base Stats" && <PokemonStats stats={stats} />}
        {activeTab === "Moves" && <PokemonMoves moves={moves} />}
        {activeTab === "Evolution" && <PokemonEvolution chain={evolution} />}
      </div>
    </div>
  );
}
