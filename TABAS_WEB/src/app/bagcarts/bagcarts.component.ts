import { Component, OnInit } from '@angular/core';
import { Bagcart } from '../model/bagcart.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-bagcarts',
  templateUrl: './bagcarts.component.html',
  styleUrls: ['./bagcarts.component.css']
})
export class BagcartsComponent implements OnInit {

  /**
    * Se define una propiedad que nos permitira almacenar la informacion proveniente del get
    */
  bagcartName: Bagcart | any;

  constructor(private userSvc: UserService) { }


  ngOnInit(): void {
    /**
    * Se utiliza la entidad privada de servicios para realizar el get de los nombres de los bagcarts
    * y mostrarlos en el menu de seleccion. 
    */
    this.userSvc.getBagcart().subscribe( data => (this.bagcartName = data));
  }

}
