export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonType = {
  slot: number;
  type: { name: string };
};

export type PokemonStat = {
  base_stat: number;
  stat: { name: string };
};

export type PokemonMove = {
  move: { name: string };
};

export type PokemonDetail = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  species: { name: string; url: string };
  types: PokemonType[];
  sprites: {
    other: {
      ["official-artwork"]: { front_default: string };
    };
  };
  stats: PokemonStat[];
  moves: PokemonMove[];
};

// Evolution chain types
export type PokemonEvolutionDetail = {
  species: { name: string };
  evolves_to: PokemonEvolutionDetail[];
};

export type PokemonEvolutionChain = {
  chain: PokemonEvolutionDetail;
};
