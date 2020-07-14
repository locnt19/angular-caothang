import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivityComponent } from './components/activity/activity.component';
import { SidebarChuongtrinhdaotaoComponent } from './components/sidebar/sidebar-chuongtrinhdaotao/sidebar-chuongtrinhdaotao.component';
import { SidebarCnttComponent } from './components/sidebar/sidebar-cntt/sidebar-cntt.component';
import { SidebarDiemComponent } from './components/sidebar/sidebar-diem/sidebar-diem.component';
import { SidebarElearningComponent } from './components/sidebar/sidebar-elearning/sidebar-elearning.component';
import { SidebarBaocaoquyetdinhComponent } from './components/sidebar/sidebar-baocaoquyetdinh/sidebar-baocaoquyetdinh.component';
import { SidebarFacebookComponent } from './components/sidebar/sidebar-facebook/sidebar-facebook.component';
import { PageFacebookComponent } from './pages/page-facebook/page-facebook.component';
import { PageBaocaoquyetdinhComponent } from './pages/page-baocaoquyetdinh/page-baocaoquyetdinh.component';
import { PageElearningComponent } from './pages/page-elearning/page-elearning.component';
import { PageCnttComponent } from './pages/page-cntt/page-cntt.component';
import { PageDiemComponent } from './pages/page-diem/page-diem.component';
import { PageChuongtrinhdaotaoComponent } from './pages/page-chuongtrinhdaotao/page-chuongtrinhdaotao.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ModalLichdaotaoComponent } from './components/modal/chuongtrinhdaotao/modal-lichdaotao/modal-lichdaotao.component';
import { ModalKehoachdaotaoComponent } from './components/modal/chuongtrinhdaotao/modal-kehoachdaotao/modal-kehoachdaotao.component';
import { ModalChitieudaotaoComponent } from './components/modal/chuongtrinhdaotao/modal-chitieudaotao/modal-chitieudaotao.component';
import { ModalNganhngheComponent } from './components/modal/chuongtrinhdaotao/modal-nganhnghe/modal-nganhnghe.component';
import { ModalKhoabomonComponent } from './components/modal/chuongtrinhdaotao/modal-khoabomon/modal-khoabomon.component';
import { ModalMonhocComponent } from './components/modal/chuongtrinhdaotao/modal-monhoc/modal-monhoc.component';
import { ModalGiaovienComponent } from './components/modal/chuongtrinhdaotao/modal-giaovien/modal-giaovien.component';
import { ModalNopdiemComponent } from './components/modal/diem/modal-nopdiem/modal-nopdiem.component';
import { ModalThongkediemComponent } from './components/modal/diem/modal-thongkediem/modal-thongkediem.component';
import { ModalDiemchinhthucComponent } from './components/modal/diem/modal-diemchinhthuc/modal-diemchinhthuc.component';
import { ModalLophocComponent } from './components/modal/diem/modal-lophoc/modal-lophoc.component';
import { ModalLophocphanComponent } from './components/modal/diem/modal-lophocphan/modal-lophocphan.component';
import { ModalGiaovienlophocphanComponent } from './components/modal/chuongtrinhdaotao/modal-giaovienlophocphan/modal-giaovienlophocphan.component';
import { ModalCotdiemlophocphanComponent } from './components/modal/diem/modal-cotdiemlophocphan/modal-cotdiemlophocphan.component';
import { ModalDiemtongketlophocphanComponent } from './components/modal/diem/modal-diemtongketlophocphan/modal-diemtongketlophocphan.component';
import { ModalDiemquatrinhlophocphanComponent } from './components/modal/diem/modal-diemquatrinhlophocphan/modal-diemquatrinhlophocphan.component';
import { ModalBaocaoquyetdinhComponent } from './components/modal/baocaoquyetdinh/modal-baocaoquyetdinh/modal-baocaoquyetdinh.component';
import { ModalPhanconggiangdayComponent } from './components/modal/elearning/modal-phanconggiangday/modal-phanconggiangday.component';
import { ModalQuanlykhaosatComponent } from './components/modal/elearning/modal-quanlykhaosat/modal-quanlykhaosat.component';
import { ModalTracuuthongtinComponent } from './components/modal/elearning/modal-tracuuthongtin/modal-tracuuthongtin.component';
import { ModalBaidangfacebookComponent } from './components/modal/facebook/modal-baidangfacebook/modal-baidangfacebook.component';
import { ModalGroupfacebookComponent } from './components/modal/facebook/modal-groupfacebook/modal-groupfacebook.component';
import { ModalPagefacebookComponent } from './components/modal/facebook/modal-pagefacebook/modal-pagefacebook.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalQuanlyheadercnttComponent } from './components/modal/cntt/modal-quanlyheadercntt/modal-quanlyheadercntt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActivityComponent,
    SidebarChuongtrinhdaotaoComponent,
    SidebarCnttComponent,
    SidebarDiemComponent,
    SidebarElearningComponent,
    SidebarBaocaoquyetdinhComponent,
    SidebarFacebookComponent,
    PageFacebookComponent,
    PageBaocaoquyetdinhComponent,
    PageElearningComponent,
    PageCnttComponent,
    PageDiemComponent,
    PageChuongtrinhdaotaoComponent,
    PageDashboardComponent,
    ModalLichdaotaoComponent,
    ModalKehoachdaotaoComponent,
    ModalChitieudaotaoComponent,
    ModalNganhngheComponent,
    ModalKhoabomonComponent,
    ModalMonhocComponent,
    ModalGiaovienComponent,
    ModalNopdiemComponent,
    ModalThongkediemComponent,
    ModalDiemchinhthucComponent,
    ModalLophocComponent,
    ModalLophocphanComponent,
    ModalGiaovienlophocphanComponent,
    ModalCotdiemlophocphanComponent,
    ModalDiemtongketlophocphanComponent,
    ModalDiemquatrinhlophocphanComponent,
    ModalBaocaoquyetdinhComponent,
    ModalPhanconggiangdayComponent,
    ModalQuanlykhaosatComponent,
    ModalTracuuthongtinComponent,
    ModalBaidangfacebookComponent,
    ModalGroupfacebookComponent,
    ModalPagefacebookComponent,
    ModalComponent,
    ModalQuanlyheadercnttComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
