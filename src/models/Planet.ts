

import { Type } from "class-transformer";

export class Planet {
    name:string;
    rotation_period:number;
    orbital_period:number;
    diameter:number;
    climate:string;
    gravity:string;
    terrain:string;
    surface_water:string;
    population:number;
    residents:string[];
    films:string;

  @Type(() => Date)
  created: Date;

  @Type(() => Date)
  edited: Date;

  url: string;
}

export class PlanetList {
  count: number;

  next: string | null;

  previous: string | null;

  @Type(() => Planet)
  results: Planet[];
}
