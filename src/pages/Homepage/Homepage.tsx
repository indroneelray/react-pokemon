import React from "react";
import { pokemonClassService } from "../../service/pokemon.service";
import PokemonCard from "./components/PokemonCard";

type Props = {};

export default function Homepage({}: Props) {
  const [pokemonList, setPokemonList] = React.useState<
    { name: string; url: string }[]
  >([]);
  const [params, setParams] = React.useState<{ limit: number; offset: number }>(
    { limit: 15, offset: 15 }
  );
  const fetchPokemon = () => {
    pokemonClassService.getPokemonList(params).then((data) => {
      const results = data.results; //check network tab
      setPokemonList(results);
    });
  };
  React.useEffect(() => {
    fetchPokemon();

    return () => {}; //unmount
  }, []); //Did mount - runs once

  return (
    <div className="grid grid-cols-12">
      {pokemonList.map((item) => {
        return (
          <div className="col-span-12 md:col-span-4 mb-4" key={item.name}>
            <PokemonCard url={item.url} name={item.name} />
          </div>
        );
      })}
    </div>
  );
}
