import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class ApphttpclientService {

  headers = new Headers();  
  domain=environment.apiURL
  get(endPoint) {
    return this.http.get(this.domain+endPoint);
  }

  post(endPoint, bodyParams) {    
    return this.http.post(this.domain+endPoint, bodyParams);
  }

  put(endPoint, bodyParams) {    
    return this.http.put(this.domain+endPoint, bodyParams);
  }
  
  constructor(private http:Http) { 
      // new RequestOptions({ headers: this.headers })
      // this.headers.append('Content-Type', 'application/json');
  }
  
}
