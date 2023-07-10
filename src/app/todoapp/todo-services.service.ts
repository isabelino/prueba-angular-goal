import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodoServices {
  taskArray = [{ taskName: 'Desayunar', isCompleted: false }];

  countCompleted:number = 0;
  countNoCompleted:number = 0;
  taskArrayComplete!: { taskName: string; isCompleted: boolean; }[];

  constructor() {
    console.log("servicio iniciado");
   }

   onSubmitService(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    form.reset();

    this.countTaskCompleted();
  }

  onDeleteService(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
    this.countTaskCompleted();
  }

  public onCheckService(index: number) {
    console.log(this.taskArray);


    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    this.countTaskCompleted();
  }

  countTaskCompleted():void{
    this.countCompleted = this.taskArray.filter(n=>n.isCompleted == true).length;
    this.countNoCompleted= this.taskArray.filter(n=>n.isCompleted == false).length;
    //this.taskArray = this.taskArray.filter(x => x.isCompleted == false);
  }
}
