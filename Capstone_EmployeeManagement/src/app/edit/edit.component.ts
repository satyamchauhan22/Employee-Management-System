import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../service.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private location:Location,private service:ServiceService,private router: Router) { }

  ngOnInit(): void {
    
  }
  emp:Employee={
    id:0,name:'',location:'',mobile:'',email:''
  };
  selectedOption:string='';
  options=[
    {name:"Bangalore",value:1},
    {name:"Pune",value:2},
    {name:"Chennai",value:3},
    {name:"Hyderabad",value:4}
  ]
  onSubmit(data:any){
   this.emp.id=this.route.snapshot.paramMap.get('empid');
   this.emp.name=data.name;
   this.emp.mobile=data.mobile;
   this.emp.email=data.email;
   this.emp.location=this.selectedOption;
   this.service.updateemployees(this.emp);
   this.router.navigate(['/view']);
  }

}
