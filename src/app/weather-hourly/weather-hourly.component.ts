import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css']
})
export class WeatherHourlyComponent implements OnInit ,OnDestroy{
weather:any
hourly:any
isloading=true
unsub:Subscription;
  constructor(private weatherS:WeatherService) { }

  ngOnInit(): void {

   this.unsub= this.weatherS.weatherSubject.subscribe(data=>{
      this.isloading=true
      this.weather=data
this.hourly=data.hour
console.log(this.hourly)
      console.log(data)
    })
  this.isloading=false

}
ngOnDestroy(): void {
    this.unsub.unsubscribe()
}
}
