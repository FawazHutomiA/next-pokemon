import { PokemonDetail, PokemonListItem, PokemonEvolutionChain } from "@/types/pokemon";

const API_URL = "https://pokeapi.co/api/v2";

export async function getPokemons(offset = 0, limit = 20): Promise<PokemonDetail[]> {
  const res = await fetch(`${API_URL}/pokemon?offset=${offset}&limit=${limit}`);
  const data = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p: PokemonListItem) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return detailed;
}

export async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await fetch(`${API_URL}/pokemon/${name}`);
  return res.json();
}

export async function getPokemonEvolutionChain(speciesUrl: string) {
  const speciesRes = await fetch(speciesUrl);
  const species = await speciesRes.json();

  const evoRes = await fetch(species.evolution_chain.url);
  return (await evoRes.json()) as PokemonEvolutionChain;
}
