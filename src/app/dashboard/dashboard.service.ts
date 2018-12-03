import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()
export class DashboardService {
  // private url = 'http://localhost:50466/api/contact';  // URL to web api
  private url = 'https://localhost:44326/api/values';  // URL to web api

  constructor(
    private http: HttpClient,
    private adal: MsAdalAngular6Service) { }


  testApi() {
    const token = 'Bearer ' + this.adal.accessToken;
    console.log(token);
    const headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append('Authorization', token);

    const loginHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }

    const httpOptions = {
      headers: headers_object
    };

    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Authorization': token })
    // };
    this.http.get(this.url, loginHeaders).subscribe(elem => {
      console.log(elem);
    }, (error) => {
      console.log(error);
    })
  }


}
