import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-lichdaotao',
  templateUrl: './modal-lichdaotao.component.html',
  styleUrls: ['./modal-lichdaotao.component.css']
})
export class ModalLichdaotaoComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
