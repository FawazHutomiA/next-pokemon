import { PokemonEvolutionDetail } from "@/types/pokemon";

type Props = {
  chain: PokemonEvolutionDetail;
};

function renderChain(chain: PokemonEvolutionDetail): string[] {
  const names: string[] = [chain.species.name];
  if (chain.evolves_to.length > 0) {
    names.push(...renderChain(chain.evolves_to[0]));
  }
  return names;
}

export default function PokemonEvolution({ chain }: Props) {
  const evoChain = renderChain(chain);

  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 mb-2">Evolution</h2>
      <div className="flex items-center space-x-2 text-lg">
        {evoChain.map((name, idx) => (
          <div key={name} className="flex items-center">
            <span className="capitalize">{name}</span>
            {idx < evoChain.length - 1 && <span className="mx-2">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
