import { Component, OnInit } from '@angular/core';
import { RestService } from '../webservices/rest.service';

export interface Task {
  id: string,
  name: string,
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  tasks: Task[]

  constructor(private restService: RestService){}

  ngOnInit() {
    this.restService.wsGetTodos().subscribe((data: any[]) => {
      console.log("data", data)
      this.tasks = []
      
      data.forEach(element => {
        this.tasks.push(element)
      });

      console.log("tasks", this.tasks)
    });
  }

}
