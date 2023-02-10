import { Component, OnInit } from '@angular/core';
import { InjectServiceIntoAModuleService } from 'src/app/services/inject-service-into-a-module.service';

@Component({
  selector: 'app-child-inject-module',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public injectServiceIntoAModuleService: InjectServiceIntoAModuleService) { }

  ngOnInit(): void {
  }

}
