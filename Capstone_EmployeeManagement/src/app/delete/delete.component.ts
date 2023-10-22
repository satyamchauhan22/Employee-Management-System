import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:ServiceService,private router:Router) { }
  id:any;
  ngOnInit(): void {
   this.id=this.route.snapshot.paramMap.get('empid');
   this.service.deleteById(this.id);
   this.router.navigate(['/view']);
  }

}
