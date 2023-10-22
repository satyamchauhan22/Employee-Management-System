import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  constructor(private route:ActivatedRoute,private service:ServiceService,private location:Location) { }
  id:any;
  emp:Employee={id:0,name:'',email:'',mobile:'',location:''}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('empid');
    this.emp=this.service.getEmployeeById(this.id);
  }

  goBack(){
    //this.router.navigate(['/view']);
    this.location.back();
  }

}
