import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})

export class ListTaskComponent {
  @Input() taskArr!: any;

  @Output() fromList = new EventEmitter();

  public editStatus = false;
  public changeTask!: string;
  public numChangeTask!: number;

  isCheckbox(index: number): void{
    this.taskArr[index].status = !this.taskArr[index].status
  }

  deleteTask(index: number): void{
    this.taskArr.splice(index, 1);
    this.fromList.emit(this.taskArr.length);
  }

  editTask(index: number): void{
    this.editStatus = true;
    this.changeTask = this.taskArr[index].task;
    this.numChangeTask = index;
  }

  addChange(): void{
    this.taskArr[this.numChangeTask].task = this.changeTask;
    this.editStatus = false;
  }

}
