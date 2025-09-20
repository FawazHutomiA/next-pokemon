"use client";

import { useEffect, useState, useRef } from "react";
import PokemonCard from "@/components/PokemonCard";
import LoaderDots from "@/components/LoaderDots";
import { getPokemons } from "@/lib/pokeapi";
import { PokemonDetail } from "@/types/pokemon";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const LIMIT = 18;

  // Fetch pokemons
  const fetchPokemons = async () => {
    setLoading(true);
    const newData = await getPokemons(offset, LIMIT);
    setPokemons((prev) => {
      const merged = [...prev, ...newData];

      const unique = Array.from(
        new Map(merged.map((p) => [`${p.id}-${p.name}`, p])).values()
      );
      return unique;
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setOffset((prev) => prev + LIMIT);
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loading]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pokemons.map((p) => (
          <PokemonCard
            key={`${p.id}-${p.name}`}
            id={p.id}
            name={p.name}
            image={p.sprites.other["official-artwork"].front_default}
            types={p.types.map((t) => t.type.name)}
          />
        ))}
      </div>

      {loading && <LoaderDots />}

      <div ref={loaderRef} className="h-10"></div>
    </div>
  );
}
