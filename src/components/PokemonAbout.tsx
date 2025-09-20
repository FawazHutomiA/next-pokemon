type Props = {
  species: string;
  height: number;
  weight: number;
  abilities: string[];
};

export default function PokemonAbout({ species, height, weight, abilities }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">About</h2>
      <ul className="space-y-1 text-gray-700">
        <li><b>Species:</b> {species}</li>
        <li><b>Height:</b> {height / 10} m</li>
        <li><b>Weight:</b> {weight / 10} kg</li>
        <li><b>Abilities:</b> {abilities.join(", ")}</li>
      </ul>
    </div>
  );
}
