import { Component } from '@angular/core';
import { HeroRequestService } from '../../services/heroes.service';
import { FormControl } from '@angular/forms';
import { Heroe } from '../../interfaces/heroes.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {


  public searchInput = new FormControl('');
  public heroeOptions: Heroe[] = [];
  selectedHeroe?: Heroe;

  constructor(private heroService: HeroRequestService)
  {}

  autocompleteOptionsBySearchTerm() : void
  {
    const searchTerm = this.searchInput.value || '';

    this.heroService.getHeroesBySearchTerm(searchTerm)
        .subscribe( heroes => this.heroeOptions = heroes );
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) : void {

    console.log(event);

    if(!event.option.value)
    {
      this.selectedHeroe = undefined;
      return;
    }

    this.selectedHeroe = event.option.value;
    this.searchInput.setValue(this.selectedHeroe!.superhero);

    }

}
