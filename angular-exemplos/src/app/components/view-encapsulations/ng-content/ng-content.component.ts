import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  public caption: string = 'Custom Modal';
  @ViewChild('modal',{static:true}) private _ctrlModal: ModalComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public fnOpenModal(): void {
    this._ctrlModal.showModal();
  }

  public fnHideModal(): void {
      this._ctrlModal.close();
  }
}
