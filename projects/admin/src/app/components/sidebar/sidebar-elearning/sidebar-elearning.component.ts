import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-sidebar-elearning',
  templateUrl: './sidebar-elearning.component.html',
  styleUrls: ['./sidebar-elearning.component.css']
})
export class SidebarElearningComponent implements OnInit {

  constructor(private modalService: ModalService) { }


  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id)
  }

}
