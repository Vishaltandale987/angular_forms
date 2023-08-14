import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  auth(){
    let auth = sessionStorage.getItem("auth");
    
    if(auth === null){
      return false
    }else{
      return true
    }
  }


  handle_logout(){
    sessionStorage.removeItem("auth")

    console.log(this.auth())
  }
}
