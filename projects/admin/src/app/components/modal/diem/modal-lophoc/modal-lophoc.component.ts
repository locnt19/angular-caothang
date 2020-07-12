import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-lophoc',
  templateUrl: './modal-lophoc.component.html',
  styleUrls: ['./modal-lophoc.component.css']
})
export class ModalLophocComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
