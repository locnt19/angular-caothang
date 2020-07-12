import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-lophocphan',
  templateUrl: './modal-lophocphan.component.html',
  styleUrls: ['./modal-lophocphan.component.css']
})
export class ModalLophocphanComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
