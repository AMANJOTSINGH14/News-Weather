import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {tap} from 'rxjs/operators'


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey', apiKey);

@Injectable({
  providedIn:'root'
})
export class NewsServiceService {
  constructor(private http: HttpClient) {}


  getData(url:any) {
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
        console.log(value);
      })
    );
  }
}
