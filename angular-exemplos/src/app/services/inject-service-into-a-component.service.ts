import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectServiceIntoAComponentService {

  constructor() { }

  public message: string = "mensagem InjectServiceIntoAComponentService";
}
