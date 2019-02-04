import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChangePicturesComponent } from './change-pictures/change-pictures.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: ProfileComponent },
  { path: 'change-pictures', pathMatch: 'full', component: ChangePicturesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
