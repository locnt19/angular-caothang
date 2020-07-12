import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-diemtongketlophocphan',
  templateUrl: './modal-diemtongketlophocphan.component.html',
  styleUrls: ['./modal-diemtongketlophocphan.component.css']
})
export class ModalDiemtongketlophocphanComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
