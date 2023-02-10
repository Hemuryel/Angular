import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface BDelegate {
  dados: string[];
  saveData(p: any): void;
}

@Component({
  selector: 'app-com-delegate-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  @Input() delegate: BDelegate;

  dadosFilho: string[];
  mensagemFilho: string = "mensagem filho 123";

  public saveDataFilho(): void{
    this.delegate.saveData(this.mensagemFilho);
  }

  constructor(){
  }

  ngOnInit(): void {
    this.dadosFilho = this.delegate.dados;
  }
}
