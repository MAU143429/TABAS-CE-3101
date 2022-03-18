import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../model/users';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //variable en donde se guarda el nuevo usuario de tipo USERS
  newUser:Users = new Users
  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  // Metodo para agregar un nuevo usuario desde la seccion de registro
  addNewUser(newUser:Users){
    this.service.addUser(newUser).subscribe(user=> console.log(user));
  }

}
