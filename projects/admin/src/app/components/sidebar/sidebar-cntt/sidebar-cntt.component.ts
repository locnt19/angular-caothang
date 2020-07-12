import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-cntt',
  templateUrl: './sidebar-cntt.component.html',
  styleUrls: ['./sidebar-cntt.component.css']
})
export class SidebarCnttComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

}
