import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherSubject=new BehaviorSubject<any>(null);
  constructor(private http:HttpClient) { }

getWeatherData(location:any){
return this.http.get(`http://api.weatherapi.com/v1/forecast.json?key=90d0cae69ea841fbbcb114918221001&q=${location}&days=10&aqi=no&alerts=no`).pipe(tap(v=>{
console.log(v);

}))
}


}
