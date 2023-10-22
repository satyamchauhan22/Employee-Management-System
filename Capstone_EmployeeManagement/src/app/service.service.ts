import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  employees:Employee[]=[
    {
      id:1,
      name:'satyam',
      location:'delhi',
      email:'satyam@gmail.com',
      mobile:'9991111111'
    },
    {
      id:2,
      name:'komal',
      location:'dehradun',
      email:'komal@gmail.com',
      mobile:'9991199111'
    }
  ]

  getEmployees():Employee[]{
return this.employees;
  }

  getEmployeeById(id:any):Employee{
    for(let em of this.employees){
      if(em.id==id){
        return em;
      }
    }
    return this.employees[id];
  }

  updateemployees(emp:Employee){
    this.employees[emp.id-1].name=emp.name;
    this.employees[emp.id-1].email=emp.email;
    this.employees[emp.id-1].mobile=emp.mobile;
    this.employees[emp.id-1].location=emp.location;
  }

  deleteById(id:any):void{

   this.employees=this.employees.filter(x=>x.id!=id);
  }

  addEmployee(emp:Employee):void{
    let id=this.employees.length+1;
    emp.id=id;
    this.employees.push(emp);

  }

  getEmail(email:string):boolean{
    for(let em of this.employees){
      if(em.email==email){
        return true;
      }
    }
    return false;
  }
}
