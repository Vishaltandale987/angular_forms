import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router,private toastr: ToastrService) { }

  
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
      this.ngOnInit()
    }
  }


  handle_logout(){
    sessionStorage.removeItem("auth")

    console.log(this.auth())
  }

  pop_handle(){
    if(this.auth() === false){
      this.toastr.success('Please Login frist');

      this.router.navigate(['sign-in'])
    }
  }
}
