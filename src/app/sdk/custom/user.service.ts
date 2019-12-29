import { HttpClientModule } from '@angular/common/http'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MedicineConfig } from '../Medicine.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  public userLogin(credentials: object): Observable<any> {

    // this url will be http://localhost:3000/users/login
    const url = MedicineConfig.getPath() + '/login';

    return this.http.post(url, credentials);
  }

  public userRegister(credentials: object): Observable<any> {
    const url = MedicineConfig.getPath() + '/signup';

    return this.http.post(url, credentials);
  }
}