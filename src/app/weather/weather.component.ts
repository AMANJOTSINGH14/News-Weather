import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
WeatherData:any
isLoading=false
isCard=false;
constructor(private http:HttpClient,private weatherS:WeatherService) { }

  ngOnInit(): void {
  }
onLocation(event:any){
this.isLoading=true
this.isCard=false
  this.weatherS.getWeatherData(event).subscribe(data=>{

  this.WeatherData=data

  this.isLoading=false
  this.isCard=true
})
}
}
