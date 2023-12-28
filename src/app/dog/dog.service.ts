import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http:HttpClient) { }
  getDog():Observable<Dog[]>{
    return this.http.get<[]>("http://localhost:3000/dogs/dog")
  }
  }
