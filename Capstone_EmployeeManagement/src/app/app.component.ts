import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capstone_EmployeeManagement';

  constructor(private service:ServiceService){

  }
  
  employeelist:any=this.service.getEmployees;



}
