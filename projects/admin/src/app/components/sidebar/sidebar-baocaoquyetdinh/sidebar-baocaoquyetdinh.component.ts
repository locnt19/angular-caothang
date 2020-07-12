import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-baocaoquyetdinh',
  templateUrl: './sidebar-baocaoquyetdinh.component.html',
  styleUrls: ['./sidebar-baocaoquyetdinh.component.css']
})
export class SidebarBaocaoquyetdinhComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

}
