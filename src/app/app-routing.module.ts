import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChangePicturesComponent } from './change-pictures/change-pictures.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about-me' },
  { path: 'about-me', pathMatch: 'full', component: ProfileComponent },
  { path: 'careers', pathMatch: 'full', component: UnderConstructionComponent },
  { path: 'my-goals', pathMatch: 'full', component: UnderConstructionComponent },
  { path: 'change-pictures', pathMatch: 'full', component: ChangePicturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
