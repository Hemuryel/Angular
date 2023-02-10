import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sem-delegate-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  @Input() dadosFilho: [];
  @Output() onSaveDataFilho = new EventEmitter<any>();
  mensagemFilho: string = "mensagem filho";

  public saveDataFilho(): void{
    this.onSaveDataFilho.emit(this.mensagemFilho);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
