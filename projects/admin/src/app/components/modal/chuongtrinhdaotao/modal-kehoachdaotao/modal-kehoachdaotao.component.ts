import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-kehoachdaotao',
  templateUrl: './modal-kehoachdaotao.component.html',
  styleUrls: ['./modal-kehoachdaotao.component.css']
})
export class ModalKehoachdaotaoComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
