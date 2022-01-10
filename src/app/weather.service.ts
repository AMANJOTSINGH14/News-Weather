import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

getWeatherData(location:any){
return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=90d0cae69ea841fbbcb114918221001&q=${location}&days=1&aqi=no&alerts=no`).pipe(tap(v=>{
console.log(v);

}))
}


}
