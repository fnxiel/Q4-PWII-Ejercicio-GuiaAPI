import { Component, OnInit } from '@angular/core';
import { IPokemonResumen } from './IListadoPokemon';
import { IPokemonMove } from './IPokemon';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'guiaapi';
  nombrePokemon: string =''
  urlImagenPokemon: string = ''
  movimientos: IPokemonMove[] = []
  id: number = 0

  conteo: number = 0
  listadoPokemons: IPokemonResumen[] = []

  idPokemonBuscar: number = 0

  constructor(public pokeApiService: PokeapiService){}

  ngOnInit(): void {
    this.pokeApiService.getPokemons().subscribe(pokemon =>{
      this.nombrePokemon = pokemon.name 
      this.urlImagenPokemon = pokemon.sprites.front_default
      this.id = pokemon.id
      this.movimientos = pokemon.moves
    })

    this.pokeApiService.getListadoPokemons().subscribe(pokemonResumen =>{
      this.conteo = pokemonResumen.count
      this.listadoPokemons = pokemonResumen.results
    })
  }

  buscarPokemon(){
    this.pokeApiService.getPokemon((this.idPokemonBuscar > 0) ? this.idPokemonBuscar : 1).subscribe(pokemon =>{
      this.nombrePokemon = pokemon.name 
      this.urlImagenPokemon = pokemon.sprites.front_default
      this.id = pokemon.id
      this.movimientos = pokemon.moves
    })
  }

}
