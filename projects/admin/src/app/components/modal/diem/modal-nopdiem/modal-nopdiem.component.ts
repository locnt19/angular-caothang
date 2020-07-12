import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-nopdiem',
  templateUrl: './modal-nopdiem.component.html',
  styleUrls: ['./modal-nopdiem.component.css']
})
export class ModalNopdiemComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
