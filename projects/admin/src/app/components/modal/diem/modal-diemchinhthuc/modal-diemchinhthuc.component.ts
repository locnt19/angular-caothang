import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-diemchinhthuc',
  templateUrl: './modal-diemchinhthuc.component.html',
  styleUrls: ['./modal-diemchinhthuc.component.css']
})
export class ModalDiemchinhthucComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
