import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public data: any = [];
  public showDetails: boolean = true;
  public showEmployee: boolean = false;
  public editEmployee: boolean = false;
  private _selectedData: any;
  private _deletedData: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  private loadData(): void {
    let self = this;
    this.http.get("http://localhost:4001/components/route/employee/employee-list")
      .subscribe((res: Response) => {
        self.data = res;
      });
  }

  private addEmployee(): void {
    this.showDetails = false;
    this.showEmployee = true;
  }

  private onHide(args: boolean): void {
    this.showDetails = !args;
    this.showEmployee = args;
    this.editEmployee = args;
    this.loadData();
  }

  private onUpdateData(item: any): void {
    this._selectedData = item;
    this._selectedData.DOB = new Date(this._selectedData.DOB);
    this._selectedData.DOJ = new Date(this._selectedData.DOJ);
    this.showDetails = false;
    this.editEmployee = true;
  }

  private onDeleteData(item: any): void {
    this._deletedData = item;
    if (confirm("Do you want to Delete Record Permanently?")) {
      let self = this;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf-8'
        })
      };
      this.http.post("http://localhost:81/SampleAPI/employee/DeleteEmployee", this._deletedData, httpOptions)
          .subscribe((res: Response) => {
              self.loadData();
          });
    }
  }
}
