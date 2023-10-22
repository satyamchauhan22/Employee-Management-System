import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  emp:Employee={id:0,name:'',mobile:'',email:'',location:''};

  selectedOption:string='';

  options=[
    {name:"Bangalore",value:1},
    {name:"Pune",value:2},
    {name:"Chennai",value:3},
    {name:"Hyderabad",value:4}
  ]
  onSubmit(data:any){
    
    this.emp.email=data.email;
    this.emp.mobile=data.mobile;
    this.emp.location=this.selectedOption;
    this.emp.name=data.name;

    if(this.service.getEmail(data.email)){
      return alert("Employee already exist with given email id: "+data.email);
    }
    this.service.addEmployee(this.emp);
    this.router.navigate(['/view']);

  }

}
