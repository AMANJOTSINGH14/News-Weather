import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
    this.weatherS.WeatherStart.subscribe(data=>{
      console.log(data)
      if(data!==null)
      {this.isLoading=true
        this.isCard=false;
      console.log(data[0])
      console.log(data[1])
      this.WeatherData=data[0]
      this.loadedWeather=data[1]
      this.isLoading=false
      this.isCard=true
    }

    })
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
this.router.navigate(['./checkHourly'])
this.weatherS.WeatherStart.next([this.WeatherData,this.loadedWeather])

}
}
