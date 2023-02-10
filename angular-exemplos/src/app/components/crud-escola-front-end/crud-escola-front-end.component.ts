import { CrudEscolaFrontEndService } from './../../services/crud-escola-front-end.service';
import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud-escola-front-end',
  templateUrl: './crud-escola-front-end.component.html',
  styleUrls: ['./crud-escola-front-end.component.css']
})
export class CrudEscolaFrontEndComponent implements OnInit {
  images: Images;
  erro: any;

  constructor(private crudService: CrudEscolaFrontEndService) {
    this.getter();
  }

  ngOnInit() {
  }

  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) =>{
        this.images = data;
        console.log(data);
      }, (error: any) => {
        this.erro = error;
        console.error("ERROR: ", error);
      }
    );
  }
}
