type Props = { types: string[] };

const typeColors: Record<string, string> = {
  grass: "bg-green-400",
  fire: "bg-red-400",
  water: "bg-blue-400",
  poison: "bg-purple-400",
  flying: "bg-sky-300",
  default: "bg-gray-400",
};

export default function PokemonTypes({ types }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {types.map((t) => (
        <span
          key={t}
          className={`px-3 py-1.5 rounded-lg text-white text-xs ${
            typeColors[t] || typeColors.default
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}
