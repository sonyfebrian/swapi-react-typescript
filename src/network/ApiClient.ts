import { plainToInstance } from "class-transformer";
import { Planet, PlanetList } from "../models/Planet";

/**
 * Simple API client using the fetch api
 */
export class ApiClient {
  static readonly baseURL = "https://swapi.dev/api";

  public async getPlanets(page: number = 1): Promise<PlanetList> {
    const data = await fetch(`${ApiClient.baseURL}/planets/?page=${page}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(PlanetList, data);
  }

  public async getPlanet(id: string): Promise<Planet> {
    const data = await fetch(`${ApiClient.baseURL}/planets/${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((response) => response.json() as Promise<Object>);

    return plainToInstance(Planet, data);
  }

}
