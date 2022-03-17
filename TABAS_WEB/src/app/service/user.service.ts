import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { Info } from '../model/info.interface'
import { Bagcart } from '../model/bagcart.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:7027/api/Tabas'
  constructor(private httpclient:HttpClient) { }

  //GET
  getVuelos():Observable<Info[]>{
    return this.httpclient.get<Info[]>(this.url+'/GetVuelos')
  }

  //GET
  getBagcart():Observable<Bagcart>{
    return this.httpclient.get<Bagcart>(this.url+'/GetBagcart')
  }

  //POST
  addUser(user:Users):Observable<any>{
    return this.httpclient.post(this.url+'/AddUser', user)
  }

}
