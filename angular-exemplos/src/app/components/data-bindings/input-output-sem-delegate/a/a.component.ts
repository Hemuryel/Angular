import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sem-delegate-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})

export class AComponent implements OnInit {
  dadosPai: string[] = ['column1', 'column2', 'column3'];

  constructor() { }

  ngOnInit(): void {
  }

  saveDataPai(valor: string){
    alert("mensagem pai + " + valor);
  }
}
