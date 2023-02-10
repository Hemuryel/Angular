import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showInfo: boolean = false;
  caption: string = 'Show Text';

  constructor() { }

  ngOnInit(): void {
  }

  public changeData(): void {
      this.showInfo = !this.showInfo;
      if (this.showInfo) {
          this.caption = 'Hide Text';
      }
      else {
          this.caption = 'Show Text';
      }
  }

  public mostraTitulo: boolean = false;
}
