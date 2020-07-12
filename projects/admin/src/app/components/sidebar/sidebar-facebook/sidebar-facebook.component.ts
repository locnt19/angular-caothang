import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-facebook',
  templateUrl: './sidebar-facebook.component.html',
  styleUrls: ['./sidebar-facebook.component.css']
})
export class SidebarFacebookComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

}
