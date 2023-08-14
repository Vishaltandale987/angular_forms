import { AbstractControl } from "@angular/forms";

export function check_password(password:string, confirmation_password:string){
    
return function(form: AbstractControl){
    const password_value = form.get(password)?.value
    const confirmation_password_value = form.get(confirmation_password)?.value

    if(password_value === confirmation_password_value){
        return null
    }

    return{password_valid_error: true}

}


}



export function signUp_check_password(password:string, confirmation_password:string){
    
    return function(form: AbstractControl){
        const password_value = form.get(password)?.value
        const confirmation_password_value = form.get(confirmation_password)?.value
    
        if(password_value === confirmation_password_value){
            return null
        }
    
        return{password_valid_error: true}
    
    }
    
    
    }