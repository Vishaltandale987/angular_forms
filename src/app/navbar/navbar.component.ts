import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  user_name: string = "";

  ngOnInit(): void {
    const storedData = sessionStorage.getItem('user_name'); 
    if (storedData) {
      this.user_name = JSON.parse(storedData);
    }
  }

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
