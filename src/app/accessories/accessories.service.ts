import { Injectable } from '@angular/core';
import { Accessories } from './accessories';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor(private http:HttpClient) { }
  getAccess():Observable<Accessories[]>{
    return this.http.get<[]>("http://localhost:3000/accessory/access")
  }
}
