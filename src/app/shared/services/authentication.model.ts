import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApphttpclientService } from '../../apphttpclient.service';

@Injectable()

export class AuthenticationModel{

    userData;
    token;

    setUserData(response){
        this.userData = response;
    }

    getUserData(){
        return this.userData;
    }

    setToken(token){
        this.token = token;
    }

    getToken(){
        return this.token;
    }
    
    constructor(private ApphttpclientService:ApphttpclientService){
    }
    
}
