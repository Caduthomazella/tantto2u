import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FranchiseeComponent } from './pages/franchisee/franchisee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrega', component: DeliveryComponent },
  { path: 'franquia', component: FranchiseeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
