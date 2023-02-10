import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-canal-geek-dev',
  templateUrl: './to-do-list-canal-geek-dev.component.html',
  styleUrls: ['./to-do-list-canal-geek-dev.component.css']
})
export class ToDoListCanalGeekDevComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public tarefa: string = "";
  public items: string[] = ['item 1', 'item 2', 'item 3']

  addTarefa(){
    this.items.push(this.tarefa);
  }

  removeTarefa(item: string){
    this.items.splice(this.items.indexOf(item), 1)
  }
}
