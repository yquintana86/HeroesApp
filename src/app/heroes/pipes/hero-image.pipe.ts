import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(!heroe.id && !heroe.alt_imag){
      return "assets/no-image.png";
    }

    if(heroe.alt_imag)
      return heroe.alt_imag;

    return  `assets/heroes/${ heroe.id }.jpg`;
  }
}
