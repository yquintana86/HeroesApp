import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroRequestService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

 public heroe?: Heroe;

 constructor(private activedRoute: ActivatedRoute,
             private heroService: HeroRequestService,
            private router: Router)
 {}

  ngOnInit(): void {
    this.activedRoute.params
                      .subscribe(({id}) =>
                        {
                           this.searchHero(id);
                        });
  }

  searchHero(id: string): void
  {
     this.heroService.getHeroById(id)
                      .subscribe(heroe =>
                        {
                              if(heroe)
                                this.heroe = heroe!;
                              else
                                this.router.navigate(['/heroes/list']);
                        });
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list');
    }
}
