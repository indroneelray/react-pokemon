import React, { useState } from "react";
import Button from "../../commpon-components/Button";
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

  const nextPage = () => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: (prevParams.offset += prevParams.limit),
    }));
  };

  const prevPage = () => {
    setParams((prevParams) => ({
      ...prevParams,
      offset: (prevParams.offset -= prevParams.limit),
    }));
  };

  React.useEffect(() => {
    fetchPokemon();
  }, [params]); // will also run on mount because observing params which sets an initials value in useState

  //therefore we can ignore the below code, then there will be only one api call instead of two

  // React.useEffect(() => {
  //   fetchPokemon();
  //   return () => {}; //unmount
  // }, []); //Did mount - runs once

  return (
    <>
      <div className="grid grid-cols-12">
        {pokemonList.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-4 xl:col-span-3 mb-8"
              key={item.name}
            >
              <PokemonCard url={item.url} name={item.name} />
            </div>
          );
        })}
      </div>
      <div className="w-full left-0 right-0 sticky bottom-0 bg-white py-2 border-t">
        <div className="action-buttons flex items-center justify-center gap-x-2">
          <Button
            onClick={prevPage}
            disabled={params?.offset === params?.limit}
          >
            Prev
          </Button>
          <Button onClick={nextPage}>Next</Button>
        </div>
      </div>
    </>
  );
}
