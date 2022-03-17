import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/tabas'
  constructor(private httpclient:HttpClient) { }

  //GET
  getMaletas():Observable<any>{
    return this.httpclient.get(this.url+'/GetMaletas')
  }
  //POST
  addUser(user:Users):Observable<any>{
    return this.httpclient.post(this.url+'/AddUser', user)
  }

}
