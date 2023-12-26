import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Router } from '@angular/router';
import { Category } from './category';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
category!:Category[]
  constructor(private catService:CategoriesService,private route:Router) { }

  ngOnInit(): void {
    this.catService.getCategory().subscribe(res=>{
      this.category=res;
    })
  }


}
