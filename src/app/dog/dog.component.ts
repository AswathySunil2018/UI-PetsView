import { Component, OnInit } from '@angular/core';
import { Dog } from './dog';
import { DogService } from './dog.service';
@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
dogsDetail!:Dog[]
hid=true;
  constructor(private dogserv:DogService) { }

  ngOnInit(): void {
    this.dogserv.getDog().subscribe(res=>{
      this.dogsDetail=res;
    })
  }
  getSpecificDog(val:string){
this.dogserv.getDog().subscribe(res=>{
for(let i=0;i<res.length;i++){
if(res[i].name==val){
this.dogsDetail.length=0;
this.dogsDetail.push(res[i]);
break;
}

}

  
})
  }
}
