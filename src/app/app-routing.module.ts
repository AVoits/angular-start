import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from './categories/categories.component';
import {CardsComponent} from './cards/cards.component';
import {CanvasTestComponent} from './canvas-test/canvas-test.component';


const routes: Routes = [
  { path: '', redirectTo: '/canvas', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'cards/:id', component: CardsComponent },
  { path: 'canvas', component: CanvasTestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
