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
  newUser:Users = new Users
  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  
  createUser(newUser:Users){
    this.service.addUser(newUser).subscribe(()=>{
      this.router.navigate(['/'])
    },()=>alert("Error al crear nuevo usuario"))
  }

}
