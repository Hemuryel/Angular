import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectServiceIntoAModuleService {

  constructor() { }

  public message: string = "mensagem InjectServiceIntoAModuleService";
}
