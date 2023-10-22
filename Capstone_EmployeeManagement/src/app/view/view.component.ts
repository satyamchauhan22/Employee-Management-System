import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private service:ServiceService){

  }
  search:string='';
  employeelist:Employee[]=[];
  count:number=0
  ngOnInit(){
    this.employeelist=this.service.getEmployees();
    this.count=this.employeelist.length;
  }

  delete(id:any){
    this.service.deleteById(id);
    this.employeelist=this.service.getEmployees();
    this.count=this.employeelist.length;
  }
  
}
