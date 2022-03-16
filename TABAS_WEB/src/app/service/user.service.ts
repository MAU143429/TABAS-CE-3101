import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/tabas'
  constructor(private httpclient:HttpClient) { }

  //GET
  //POST

}
