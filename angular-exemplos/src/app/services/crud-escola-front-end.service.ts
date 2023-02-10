import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Images } from 'src/app/models/placeholder.model';

@Injectable({
  providedIn: 'root'
})
export class CrudEscolaFrontEndService {

  constructor(private httpClient: HttpClient) { }

  public getFotos(): Observable<Images>{

    return this.httpClient.get<Images>("https://jsonplaceholder.typicode.com/photos");
  }
}
