import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroRequestService } from '../../services/heroes.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

constructor(private heroesService: HeroRequestService){}

public heroes: Heroe[] = [];

ngOnInit(): void {
  this.updateHeroes();
}

updateHeroes() : void
{
  this.heroesService.getHeroes().subscribe(heroes =>{
    this.heroes = heroes;
  })
}





}
