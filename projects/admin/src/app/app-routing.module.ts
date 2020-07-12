import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFacebookComponent } from './pages/page-facebook/page-facebook.component';
import { PageBaocaoquyetdinhComponent } from './pages/page-baocaoquyetdinh/page-baocaoquyetdinh.component';
import { PageElearningComponent } from './pages/page-elearning/page-elearning.component';
import { PageCnttComponent } from './pages/page-cntt/page-cntt.component';
import { PageDiemComponent } from './pages/page-diem/page-diem.component';
import { PageChuongtrinhdaotaoComponent } from './pages/page-chuongtrinhdaotao/page-chuongtrinhdaotao.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';

const routes: Routes = [
  {
    path: '', component: PageDashboardComponent, pathMatch: 'full'
  },
  {
    path: 'chuongtrinhdaotao', component: PageChuongtrinhdaotaoComponent
  },
  {
    path: 'diem', component: PageDiemComponent
  },
  {
    path: 'baocaoquyetdinh', component: PageBaocaoquyetdinhComponent
  },
  {
    path: 'elearning', component: PageElearningComponent
  },
  {
    path: 'cntt', component: PageCnttComponent
  },
  {
    path: 'facebook', component: PageFacebookComponent
  },
  {
    path: '**', component: PageFacebookComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
