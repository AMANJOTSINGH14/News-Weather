import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'headlines',
  component: HeadlinesComponent

},
{
  path: 'contacts',
component:ContactsComponent

},
{
  path: 'weather',
  component: WeatherComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
