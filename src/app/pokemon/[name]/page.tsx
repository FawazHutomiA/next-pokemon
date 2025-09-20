import Link from "next/link";
import PokemonTypes from "@/components/PokemonTypes";
import PokemonTabs from "@/components/PokemonTabs";
import { getPokemonDetail, getPokemonEvolutionChain } from "@/lib/pokeapi";

type Params = { name: string };

export default async function PokemonDetail({ params }: { params: Promise<Params> }) {
  const { name } = await params;
  const pokemon = await getPokemonDetail(name);
  const evolution = await getPokemonEvolutionChain(pokemon.species.url);

  return (
    <div className="max-w-2xl mx-auto rounded-2xl shadow-lg p-6 bg-white">
      {/* Back button */}
      <Link
        href="/pokemon"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        ← Back to List
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold capitalize mb-4 text-center">
        {pokemon.name} #{pokemon.id.toString().padStart(3, "0")}
      </h1>

      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="w-56 h-56 mx-auto mb-4"
      />

      <div className="flex justify-center mb-4">
        <PokemonTypes types={pokemon.types.map((t) => t.type.name)} />
      </div>

      {/* Tabs */}
      <PokemonTabs
            about={{
            species: pokemon.species.name,
            height: pokemon.height,
            weight: pokemon.weight,
            abilities: pokemon.abilities.map((a) => a.ability.name),
            }}
            stats={pokemon.stats}
            moves={pokemon.moves.map((m) => m.move.name)}
            evolution={evolution.chain}
        />
      
    </div>
  );
}
