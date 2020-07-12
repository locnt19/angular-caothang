import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-diemquatrinhlophocphan',
  templateUrl: './modal-diemquatrinhlophocphan.component.html',
  styleUrls: ['./modal-diemquatrinhlophocphan.component.css']
})
export class ModalDiemquatrinhlophocphanComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
