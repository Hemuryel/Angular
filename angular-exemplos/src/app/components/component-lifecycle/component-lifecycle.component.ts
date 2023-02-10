import  {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from  '@angular/core' ;

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.css']
})
export class ComponentLifecycleComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  data:number=100;

  constructor() {
      console.log(`new - data is ${this.data}`);
  }

  ngOnChanges() {
      console.log(`ngOnChanges - data is ${this.data}`);
  }

  ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
      console.log(`ngDoCheck  - data is ${this.data}`);
  }

  ngAfterContentInit() {
      console.log(`ngAfterContentInit  - data is ${this.data}`);
  }

  ngAfterContentChecked() {
      console.log(`ngAfterContentChecked  - data is ${this.data}`);
  }

  ngAfterViewInit() {
      console.log(`ngAfterViewInit - data is ${this.data}`);
  }

  ngAfterViewChecked() {
      console.log(`ngAfterViewChecked  - data is ${this.data}`);
  }

  ngOnDestroy() {
      console.log(`ngOnDestroy  - data is ${this.data}`);
  }

  fnAddNumber():void{
      this.data+=100;
  }

  deleteNumber():void{
      this.data -=10;
  }
}
