import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DecouvrireComponent } from './decouvrire/decouvrire.component';

const routes: Routes = [
  {path : '', component: LandingPageComponent },
  {path: 'decouvrire', component: DecouvrireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
