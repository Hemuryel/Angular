import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'modal-window',
    templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {
    @Input() public display: string = 'none';
    @Input('header-caption') public header: string = 'Modal';

    constructor() {
    }

    ngOnInit(): void {
    }

    fnClose(): void {
        this.display = 'none';
    }

    showModal(): void {
        this.display = 'block';
    }

    close(): void {
        this.fnClose();
    }

    setModalTitle(args: string): void {
        this.header = args;
    }
}
