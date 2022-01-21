import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
WeatherData:any
isLoading=false
loadedWeather:any
isCard=false;
constructor(private http:HttpClient,private weatherS:WeatherService,private router:Router) { }

  ngOnInit(): void {
  }
onLocation(event:any){
this.isLoading=true
this.isCard=false
  this.weatherS.getWeatherData(event).subscribe((data)=>{

  this.WeatherData=data
this.loadedWeather=this.WeatherData.forecast.forecastday.slice(1);
console.log(this.loadedWeather)
  this.isLoading=false
  this.isCard=true
})
}
tocheckHourly(i:any){
console.log(i)
this.weatherS.weatherSubject.next(i);
this.router.navigate(['checkHourly'])
}
}
