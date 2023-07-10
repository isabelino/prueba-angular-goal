import { Component, OnDestroy } from '@angular/core';
import { TodoServices } from '../todo-services.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  taskArray!: { taskName: string; isCompleted: boolean; }[];
  filterTaskArray!: { taskName: string; isCompleted: boolean; }[];
  countNoCompleted: number=0;
  countCompleted: number=0;
  public searchdata:string="";


  constructor( private services:TodoServices) { }


  ngOnInit(): void {

    this.taskArray = this.services.taskArray;
  }

  onSubmit(form: NgForm) {
    this.services.onSubmitService(form);
    this.updateCompleted();
  }

  onDelete(index: number) {
    this.services.onDeleteService(index);
    this.updateCompleted();
  }

  onCheck(index: number) {
    this.services.onCheckService(index);
    this.updateCompleted();
  }

  public sum():Number{
    return 3;
  }

  updateCompleted():void{
    this.countCompleted = this.services.countCompleted;
    this.countNoCompleted = this.services.countNoCompleted;
    this.taskArray = this.services.taskArray;

  }
}
