import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-diem',
  templateUrl: './sidebar-diem.component.html',
  styleUrls: ['./sidebar-diem.component.css']
})
export class SidebarDiemComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

}
