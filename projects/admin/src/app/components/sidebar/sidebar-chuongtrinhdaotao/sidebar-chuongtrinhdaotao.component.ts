import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-chuongtrinhdaotao',
  templateUrl: './sidebar-chuongtrinhdaotao.component.html',
  styleUrls: ['./sidebar-chuongtrinhdaotao.component.css']
})
export class SidebarChuongtrinhdaotaoComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }
}
