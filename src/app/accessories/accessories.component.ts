import { Component, OnInit } from '@angular/core';
import { AccessoriesService } from './accessories.service';
import { Accessories } from './accessories';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
access!:Accessories[]
  constructor(private accessService:AccessoriesService,private route:Router) { }

  ngOnInit(): void {
    this.accessService.getAccess().subscribe(res=>{
      this.access=res;
    })
  }
  getSpecificAccess(val:string){
    this.accessService.getAccess().subscribe(res=>{
    for(let i=0;i<res.length;i++){
    if(res[i].name==val){
    this.access.length=0;
    this.access.push(res[i]);
    break;
    }
    
    }
    
      
    })
    }
  payment(){
    this.route.navigate(['/payment'])
    }
}
