import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-thongkediem',
  templateUrl: './modal-thongkediem.component.html',
  styleUrls: ['./modal-thongkediem.component.css']
})
export class ModalThongkediemComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
