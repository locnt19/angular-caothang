import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

declare let $: any; // jQuery

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {

    const modal = this;
    const element = this.element;

    // ensure id attribute exists
    if (!modal.id) {
      console.error('Modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(element);

    // close modal on background click
    element.addEventListener('click', function (e: any) {
      if (e.target.className === 'modal_chucnang__wrapper') {
        modal.close();
      }
    });

    // close modal on Escape key
    document.addEventListener("keyup", function (e: any) {
      const keycode = e.which || e.keyCode;
      if (keycode == 27 && element.classList.contains('show')) {
        element.classList.remove('show');
        document.body.classList.remove('overflow-hidden');
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    const element = this.element;
    element.classList.add('show');
    document.body.classList.add('overflow-hidden');

    // add Select2
    $('.modal_chucnang__select2').select2({
      dropdownParent: $(element)
    })
  }

  // close modal
  close(): void {
    this.element.classList.remove('show');
    document.body.classList.remove('overflow-hidden');
  }
}
