import Link from "next/link";
import PokemonTypes from "./PokemonTypes";

type Props = {
  id: number;
  name: string;
  image: string;
  types: string[];
};

export default function PokemonCard({ id, name, image, types }: Props) {
  return (
    <Link href={`/pokemon/${name}`}>
      <div className="rounded-2xl p-4 shadow-md hover:scale-105 transition-transform cursor-pointer bg-white h-64 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold capitalize">{name}</h2>
            <p className="text-sm text-gray-500">
              #{id.toString().padStart(3, "0")}
            </p>
          </div>

          <img src={image} alt={name} className="w-36 h-36 mx-auto mt-2" />
        </div>

        <PokemonTypes types={types} />
      </div>
    </Link>
  );
}
