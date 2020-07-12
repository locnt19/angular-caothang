import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-giaovienlophocphan',
  templateUrl: './modal-giaovienlophocphan.component.html',
  styleUrls: ['./modal-giaovienlophocphan.component.css']
})
export class ModalGiaovienlophocphanComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
