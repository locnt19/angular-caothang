import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-cotdiemlophocphan',
  templateUrl: './modal-cotdiemlophocphan.component.html',
  styleUrls: ['./modal-cotdiemlophocphan.component.css']
})
export class ModalCotdiemlophocphanComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
