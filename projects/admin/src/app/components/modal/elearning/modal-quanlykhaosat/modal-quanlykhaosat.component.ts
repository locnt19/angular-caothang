import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-quanlykhaosat',
  templateUrl: './modal-quanlykhaosat.component.html',
  styleUrls: ['./modal-quanlykhaosat.component.css']
})
export class ModalQuanlykhaosatComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
