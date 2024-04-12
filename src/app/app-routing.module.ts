import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacetecComponent } from './facetec-component';

const routes: Routes = [
  {
    path: '',
    component: FacetecComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
