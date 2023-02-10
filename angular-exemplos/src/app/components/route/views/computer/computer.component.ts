import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  ngOnInit(): void {
  }

  public data: Array<any> = [];

  constructor() {
      this.data = [{ name: 'HP Pavilion 15"', company: 'HP', quantity: '10', price: '42000.00', specification: 'Intel Core i3 2 GB Ram 500 GB HDD with Windows 10' },
      { name: 'Lenovo Flex 2"', company: 'Lenovo', quantity: '20', price: '32000.00', specification: 'Intel Core i3 2 GB Ram 500 GB HDD with DOS OS' },
      { name: 'Lenovo Yova 500"', company: 'Lenovo', quantity: '20', price: '70000.00', specification: 'Intel Core i7 8 GB Ram 1TB HDD with Windows 8.1' }]
  }
}
