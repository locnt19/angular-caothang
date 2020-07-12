import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-nganhnghe',
  templateUrl: './modal-nganhnghe.component.html',
  styleUrls: ['./modal-nganhnghe.component.css']
})
export class ModalNganhngheComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
