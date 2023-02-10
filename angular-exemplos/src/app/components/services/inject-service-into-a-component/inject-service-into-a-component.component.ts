import { Component, OnInit } from '@angular/core';
import { InjectServiceIntoAComponentService } from 'src/app/services/inject-service-into-a-component.service';

@Component({
  selector: 'app-inject-service-into-a-component',
  templateUrl: './inject-service-into-a-component.component.html',
  styleUrls: ['./inject-service-into-a-component.component.css'],
  providers: [InjectServiceIntoAComponentService]
})
export class InjectServiceIntoAComponentComponent implements OnInit {

  constructor(public injectServiceIntoAComponentService: InjectServiceIntoAComponentService) { }

  ngOnInit(): void {
  }

}
