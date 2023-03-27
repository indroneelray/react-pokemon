import React, { useEffect } from "react";
import { pokemonService } from "../../../service/pokemon.service";

type Props = {
  url: string;
  name: string;
};

type Sprites = {
  front_default: string;
  back_default: string;
};

type Pokemon = {
  sprites: Sprites;
  name: string;
  weight: number;
  height: number;
};

export default function PokemonCard({ url, name }: Props) {
  const [pokemon, setPokemon] = React.useState<null | Pokemon>(null);

  useEffect(() => {
    pokemonService.getPokemon(url).then((data) => {
      setPokemon(data);
    });
  }, [url]);

  const capitalize = (name: string) => {
    return `${name.charAt(0).toUpperCase()}${name.substring(1)}`;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-1/2 mx-auto"
        src={pokemon?.sprites?.front_default}
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          {pokemon?.name && capitalize(pokemon.name)}
        </div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}
