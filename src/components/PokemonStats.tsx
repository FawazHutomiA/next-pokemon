"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  stats: { base_stat: number; stat: { name: string } }[];
};

const MAX_STAT = 150;

const getStatColor = (statName: string) => {
  switch (statName.toLowerCase()) {
    case "hp":
      return "bg-red-500";
    case "attack":
      return "bg-orange-500";
    case "defense":
      return "bg-yellow-500";
    case "special-attack":
      return "bg-blue-500";
    case "special-defense":
      return "bg-green-500";
    case "speed":
      return "bg-purple-500";
    default:
      return "bg-gray-400";
  }
};

export default function PokemonStats({ stats }: Props) {
  const average = useMemo(
    () => stats.reduce((acc, s) => acc + s.base_stat, 0) / stats.length,
    [stats]
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">Base Stats</h2>
      <div className="space-y-4 relative">
        {/* Progress bars */}
        {stats.map((s) => {
          const statPercent = Math.min(
            (s.base_stat / MAX_STAT) * 100,
            100
          ); // normalisasi 0-100%
          const isAboveAvg = s.base_stat >= average;

          return (
            <div key={s.stat.name}>
              {/* Label */}
              <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </div>

              {/* Bar */}
              <div className="w-full bg-gray-200 rounded-lg h-3 relative group overflow-hidden">
                {/* Progress bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${statPercent}%` }}
                  transition={{ duration: 0.8 }}
                  className={`${getStatColor(
                    s.stat.name
                  )} h-3 rounded-lg ${isAboveAvg ? "shadow-lg shadow-yellow-300/50" : ""}`}
                />

                {/* Average line */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-gray-500/50"
                  style={{
                    left: `${(average / MAX_STAT) * 100}%`,
                  }}
                />

                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex bg-black text-white text-xs px-2 py-1 rounded-lg">
                  {s.base_stat} points
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend rata-rata */}
      <div className="flex justify-end mt-3 text-sm text-gray-500">
        <span>Avg: {average.toFixed(0)}</span>
      </div>
    </div>
  );
}
