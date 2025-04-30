import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor( private  http : HttpClient) {}

  getall() : Observable<any> {
    return  this.http.get("http://localhost:3000/recettes")
  }

  create(data : any) : Observable<any>{
    return this.http.post("http://localhost:3000/recettes",data)
  }


}
