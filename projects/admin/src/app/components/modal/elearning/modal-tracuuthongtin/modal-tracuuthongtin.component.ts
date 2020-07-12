import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-tracuuthongtin',
  templateUrl: './modal-tracuuthongtin.component.html',
  styleUrls: ['./modal-tracuuthongtin.component.css']
})
export class ModalTracuuthongtinComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
