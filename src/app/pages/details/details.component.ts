import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private pokerApiService: PokeApiService
  ) {}
  
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activedRoute.snapshot.params['id'];
    const pokemon = this.pokerApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokerApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      response => {
        this.pokemon = response;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      } 
    );
   
  }

}