import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-escola-front-end',
  templateUrl: './reactive-forms-escola-front-end.component.html',
  styleUrls: ['./reactive-forms-escola-front-end.component.css']
})
export class ReactiveFormsEscolaFrontEndComponent implements OnInit {
  data: any;
  perfil: FormGroup = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataNascimento: new FormControl(''),
    nomeMae: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  obter(){
    this.data = this.perfil.value;
  }
}
