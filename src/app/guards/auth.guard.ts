import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const check_auth= ( ) => {
    let auth = sessionStorage.getItem("auth");
    
    if(auth === null){
      return false
    }else{
      return true
    }
  }

  
  return  check_auth();
};
