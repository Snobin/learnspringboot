import { Component, Injectable } from '@angular/core';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning';
  responseMessage:string;
  constructor(private userService: ServicesService){};
  
  
 say(){
  this.userService.say().subscribe((item: any) => {
    this.responseMessage = item.message;

 });
 }
}
