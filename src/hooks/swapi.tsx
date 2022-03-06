
import {

  useInfiniteQuery,

} from "react-query";
import { ApiClient } from "../network/ApiClient";

const apiClient = new ApiClient();

const usePlanet = () => {
  const apiUrl = `${ApiClient.baseURL}/planets/?page=`;
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery(
    "planets",
    ({ pageParam }) => apiClient.getPlanets(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next?.replace(apiUrl, ""),
      getPreviousPageParam: (firstPage) =>
        firstPage.previous?.replace(apiUrl, ""),
    }
  );

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    isLoading,
  };
};



export {  usePlanet };
