import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  ngOnInit(): void {
  }

  public data: Array<any> = [];

  constructor() {
      this.data = [{ name: 'LED TV 20"', company: 'Samsung', quantity: '10', price: '11000.00' },
      { name: 'LED TV 24"', company: 'Samsung', quantity: '50', price: '15000.00' },
      { name: 'LED TV 32"', company: 'LG', quantity: '10', price: '32000.00' },
      { name: 'LED TV 48"', company: 'SONY', quantity: '25', price: '28000.00' }];
  }
}
