import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'guiaapi';
  nombrePokemon: string =''

  constructor(public pokeApiService: PokeapiService){}

  ngOnInit(): void {
    this.pokeApiService.getPokemons().subscribe(pokemon =>{
      this.nombrePokemon = pokemon.name 
    })
  }

}
