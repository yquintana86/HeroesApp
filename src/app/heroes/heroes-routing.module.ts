import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { AddPageComponent } from "./pages/add-page/add-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { HeroPageComponent } from "./pages/hero-page/hero-page.component";


const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children: [
      { path: 'add', component: AddPageComponent},
      { path: 'search', component: SearchPageComponent },
      { path: 'edit/:id', component: AddPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: HeroPageComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingmodule{}

