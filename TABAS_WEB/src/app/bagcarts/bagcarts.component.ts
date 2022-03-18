import { Component, OnInit } from '@angular/core';
import { Bagcart } from '../model/bagcart.interface';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-bagcarts',
  templateUrl: './bagcarts.component.html',
  styleUrls: ['./bagcarts.component.css']
})
export class BagcartsComponent implements OnInit {

  bagcartName: Bagcart[] | any;

  constructor(private userSvc: UserService) { }


  ngOnInit(): void {
    /* Se utiliza el user service para realizar la solicitud GET para obtener
    los BagCarts disponibles para mostrar en el menu de seleccion de esta seccion*/
    this.userSvc.getBagcart().subscribe( data => (this.bagcartName = data));
  }

}
