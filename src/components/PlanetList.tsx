import { Item, ListBox, Text } from "@adobe/react-spectrum";
import { useMemo } from "react";
import { usePlanet } from "../hooks/swapi";

export const PlanetList = () => {
  const { isLoading, isFetchingNextPage, data, fetchNextPage, hasNextPage } =
    usePlanet();

console.log(data)
  console.log('tes', data?.pages);
  const planet = useMemo(
    () =>
      data?.pages.flatMap((page) =>
        page.results.filter((person) => {
          let shouldInclude = true;
          return shouldInclude;
        })
      ) ?? [],
    [data?.pages]
  );

 

  return (
    <ListBox
      maxHeight="100%"
      aria-label="Alignment"
      items={planet}
      isLoading={isLoading || isFetchingNextPage}
      onLoadMore={() => hasNextPage && fetchNextPage()}
    >
      {(planet) => (
        <Item key={planet.name} textValue={planet.name}>
          <Text>{planet.name}</Text>
          <Text slot="description">
            {planet.terrain}, {planet.population}
          </Text>
        </Item>
      )}
     
    </ListBox>
  );
};
