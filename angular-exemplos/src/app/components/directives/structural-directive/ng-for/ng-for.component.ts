import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productList: Array<string> = ['IPhone','Galaxy 9.0','Blackberry 10Z'];

  public cars: string[] = ["BMW", "VOLVO", "FERRARI", "PORSCHE"];
}
