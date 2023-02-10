import { Component, OnInit } from '@angular/core';
import { BDelegate } from './b/b.component';

@Component({
  selector: 'app-com-delegate-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, BDelegate  {
  dados: string[] = ['column11', 'column22', 'column33'];

  constructor() { }

  ngOnInit(): void {
  }

  saveData(valor: string){
    alert("mensagem pai 123 + " + valor);
  }
}
