import axios from 'axios';
import {
  Move,
  PokeAPIResponse,
} from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http : PokeApiAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }
}
const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(4, 'Charmander', pokeApi);

charmander.getMoves();
