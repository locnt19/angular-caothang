import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../../services/modal.service';

@Component({
  selector: 'app-modal-baocaoquyetdinh',
  templateUrl: './modal-baocaoquyetdinh.component.html',
  styleUrls: ['./modal-baocaoquyetdinh.component.css']
})
export class ModalBaocaoquyetdinhComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  closeModal(id: string) {
    this.modalService.close(id)
  }

}
