import React, { useEffect } from "react";
import { pokemonService } from "../../../service/pokemon.service";

type Props = {
  url: string;
  name: string;
};

type Sprites = {
  front_default: string;
  back_default: string;
  other: {
    "official-artwork": {
      front_default: string;
      back_default: string;
    };
  };
};

type Pokemon = {
  sprites: Sprites;
  name: string;
  weight: number;
  height: number;
  base_experience:number;
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
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-auto">
      {/* <img
        className="w-1/2 mx-auto"
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
      /> */}

      <img
        className="w-1/2 mx-auto"
        src={pokemon?.sprites?.other?.['official-artwork']?.front_default}
        alt={pokemon?.name}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          {pokemon?.name && capitalize(pokemon.name)}
        </div>
        <div className="info-container">
          <ul className='w-fit mx-auto'>
            <li>
              <strong>Weigth:&nbsp;</strong>
              {pokemon?.weight} hg
            </li>
            <li>
              <strong>Height:&nbsp;</strong>
              {pokemon?.height} dm
            </li>
            <li>
              <strong>Base XP:&nbsp;</strong>
              {pokemon?.base_experience}
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tag3
        </span>
      </div>
    </div>
  );
}
