import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { Info } from '../model/info.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4200/api/Tabas'
  constructor(private httpclient:HttpClient) { }

  //GET
  getVuelos():Observable<Info[]>{
    return this.httpclient.get<Info[]>(this.url+'/GetVuelos')
  }
  //POST
  addUser(user:Users):Observable<any>{
    return this.httpclient.post(this.url+'/AddUser', user)
  }

}
