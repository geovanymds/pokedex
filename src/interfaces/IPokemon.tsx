export interface IStat {
  name: string;
  baseStat: number;
}

export default interface IPokemon {
  name: string;
  number?: string;
  url?: string;
  types?: string[];
  height?: string;
  weight?: string;
  stats?: IStat[];
}
