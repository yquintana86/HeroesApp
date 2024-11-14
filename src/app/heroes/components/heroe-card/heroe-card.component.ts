import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './heroe-card.component.html',
  styles: [
  ]
})
export class HeroeCardComponent implements OnInit {

  @Input()
  public heroe!: Heroe;


  ngOnInit(): void {
    if ( !this.heroe ) throw Error('Hero property is required');
  }

}
