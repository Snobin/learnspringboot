import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }
  apiUrl:string="http://localhost:8081/api/hello";

  say(): Observable<any> {
    // Make a GET request
    return this.httpClient.get<any>(this.apiUrl);
  }
}
