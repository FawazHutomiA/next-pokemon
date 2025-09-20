type Props = {
  moves: string[];
};

export default function PokemonMoves({ moves }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">Moves</h2>
      <div className="flex flex-wrap gap-2">
        {moves.slice(0, 15).map((move) => (
          <span
            key={move}
            className="px-3 py-1 bg-gray-200 rounded-full text-sm capitalize"
          >
            {move}
          </span>
        ))}
      </div>
    </div>
  );
}
