import { Component, OnInit } from '@angular/core';
import { RestService } from '../webservices/rest.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  constructor(private restService: RestService){}

  ngOnInit() {
    this.restService.wsGetTodos().subscribe((data: any[]) => {
      console.log(data)
    });
  }

}
