import { Component, OnInit } from '@angular/core';
import { InjectServiceIntoAModuleService } from 'src/app/services/inject-service-into-a-module.service';

@Component({
  selector: 'app-inject-service-into-a-module',
  templateUrl: './inject-service-into-a-module.component.html',
  styleUrls: ['./inject-service-into-a-module.component.css']
})
export class InjectServiceIntoAModuleComponent implements OnInit {

  constructor(public injectServiceIntoAModuleService: InjectServiceIntoAModuleService) { }

  ngOnInit(): void {
  }

}
