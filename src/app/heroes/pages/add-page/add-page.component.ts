import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroRequestService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'hero-add-page',
  templateUrl: './add-page.component.html',
  styles: ``
})
export class AddPageComponent implements OnInit {

  constructor(private heroeService: HeroRequestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.isEditMode())
      return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroeService.getHeroById(id))
      ).subscribe(hero => {
        if (!hero?.id)
          this.router.navigateByUrl('/');
        else
          this.heroeForm.reset(hero);
      });

  }

  isEditMode(): boolean {
    return this.router.url.includes('edit');
  }

  public heroeForm = new FormGroup(
    {
      id: new FormControl(''),
      superhero: new FormControl('', { nonNullable: true }),
      publisher: new FormControl<Publisher>(Publisher.DCComics),
      alter_ego: new FormControl(''),
      first_appearance: new FormControl(''),
      characters: new FormControl(''),
      alt_imag: new FormControl(''),
    });

  get currentHeroe(): Heroe {
    const heroe = this.heroeForm.value as Heroe;
    return heroe;
  }

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

  onSubmit(): void {

    if (!this.heroeForm.valid) return;

    if (this.currentHeroe.id) {
      this.heroeService.updateHero(this.currentHeroe)
        .subscribe(heroe => {
          this.showSnackBar(`${heroe.superhero} successfully updated`);
        });
      return;
    }

    this.heroeService.addHero(this.currentHeroe)
      .subscribe(heroe => {
        this.router.navigate(['/hero/edit', heroe.id]);
        this.showSnackBar(`${this.currentHeroe.superhero} successfully created`);
      });
  }


  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Ok', {
      duration: 2500,
    });
  }

  deleteHero(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroeForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroeService.deleteHeroById(this.currentHeroe.id))
      ).subscribe(result => {
        if (result) {
          this.router.navigateByUrl('/heroes')
          this.showSnackBar("Hero deleted!");
          return;
        }
        this.showSnackBar("The hero coudn't be deleted!");
      });
  }
}

