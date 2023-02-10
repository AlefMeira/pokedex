import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokeApiService: PokeApiService) {
  }

  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons
      .subscribe(response => {
        this.setAllPokemons = response.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      });
  }

  public getSearch(value: string) {
    const filterPokemon = this.setAllPokemons.filter((pokemon: any) => {
      return !pokemon.name.indexOf(value.toLowerCase());
    } );

    this.getAllPokemons = filterPokemon;
  }
}
