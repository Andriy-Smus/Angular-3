import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  public newTask!: any;
  public addTask = '';

  public taskData = [
    {
      task: 'HTML5',
      status: true
    },
    {
      task: 'CSS3',
      status: true
    },
    {
      task: 'SCSS',
      status: false
    },
    {
      task: 'JavaScript',
      status: false
    },
    {
      task: 'jQuery',
      status: false
    },
    {
      task: 'Angular',
      status: false
    }
  ];

  public countTask = this.taskData.length;

  createTask(): void{
    if(this.addTask !== ''){
      this.newTask = {
        task: this.addTask,
        status: false
      }
      this.taskData.push(this.newTask);
      this.addTask = '';
      this.countTask = this.taskData.length;
    }
  }

  getCountTask(count: number){
    this.countTask = count;
  }
}
