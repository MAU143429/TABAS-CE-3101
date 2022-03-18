import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';
import { Info } from '../model/info.interface'
import { Bagcart } from '../model/bagcart.interface';

@Injectable({
  providedIn: 'root'
})

// Se crea el servicio para realizar las solicitudes HTTP necesarias
export class UserService {
  //URL en el cual se encuentra el API en puerto 7027
  url = 'https://localhost:7027/api/Tabas'
  constructor(private httpclient:HttpClient) { }

  //GET
  getVuelos():Observable<Info[]>{
    //Se realiza la solicitud GET en un endpoint GetVuelos para obtener la informacion del registro de maletas por vuelo 
    return this.httpclient.get<Info[]>(this.url+'/GetVuelos')
  }

  //GET
  getBagcart():Observable<Bagcart>{
    //Se realiza la solicitud GET con el endpoint GetBagcart para obtener los BagCarts disponibles para seleccionar 
    return this.httpclient.get<Bagcart>(this.url+'/GetBagcart')
  }
  
  //POST
  //Metodo para agregar un nuevo usuario y realizar la solicitud POST al API en el endpoint AddEmployee
  addUser(employee:any):Observable<any>{
    /*const params = {
      "id" : 0,
      "nombre": employee.nombre,
      "apellidos": employee.apellidos,
      "cedula": employee.cedula,
      "correo": employee.correo,
      "telefono": employee.telefono,
      "contrasena": employee.contrasena,
      "rol": "embarcador" 
    }*/
    //console.log(employee)
    employee.rol = "embarcador"
    return this.httpclient.post(this.url+'/AddEmployee', employee)
}
  /*
  //PRUEBA POST
  testUser(){
    return this.httpclient.post<Users>(this.url+'/AddEmployee', 'Successful post')
  }*/
}
