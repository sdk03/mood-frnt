import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private router:Router){

  }

  uniqueID:any 

  login(){
    this.loginService.loginService(this.uniqueID).subscribe((result:any)=>{
      // store userID in localStorage
      localStorage.setItem("userID", result[0].id);

      // Ensure the item is set before navigating
      if (localStorage.getItem("userID") == result[0].id) {
        // The item is set successfully, navigate to the other route
        this.router.navigate(['/home']);
      } else {
        // Handle the case where setting the item failed
        console.error('Failed to set localStorage item.');
      }


    },(error) =>{
      alert(error.error.problem)
    })
  }

}
