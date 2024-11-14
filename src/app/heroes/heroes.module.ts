import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingmodule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    AddPageComponent,
    SearchPageComponent,
    HeroeCardComponent,
    HeroImagePipe,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroesRoutingmodule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
