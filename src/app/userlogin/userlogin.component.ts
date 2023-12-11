import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
val="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  this.val=this.route.snapshot.params['user']
 
 
  }
}
