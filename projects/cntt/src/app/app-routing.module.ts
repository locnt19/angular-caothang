import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTrangchuComponent } from './pages/page-trangchu/page-trangchu.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path: '', component: PageTrangchuComponent, pathMatch: 'full'
  },
  {
    path: '**', component: PageNotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
