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
  addUser(employee:any):Observable<any>{
    const params = {
      "id" : 0,
      "nombre": employee.nombre,
      "apellidos": employee.apellidos,
      "cedula": employee.cedula,
      "correo": employee.correo,
      "telefono": employee.telefono,
      "contrasena": employee.contrasena,
      "rol": "recepcionista" 
    }
    console.log(employee)
    employee.rol = "recepcionista"
    return this.httpclient.post(this.url+'/AddEmployee', employee)
}
  /*
  //PRUEBA POST
  testUser(){
    return this.httpclient.post<Users>(this.url+'/AddEmployee', 'Successful post')
  }*/
}
