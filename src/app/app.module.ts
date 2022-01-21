import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HeaderComponent } from './header/header.component';
import { LimitPipe } from './limit.pipe';
import {MatChipsModule} from '@angular/material/chips';
import { WeatherHourlyComponent } from './weather-hourly/weather-hourly.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeadlinesComponent,
    HomeComponent,
    ContactsComponent,
    HeaderComponent,
    LimitPipe,
    WeatherHourlyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
MatCardModule,
MatButtonModule,
MatToolbarModule,
MatProgressSpinnerModule,
MatTableModule,
MatTooltipModule,
MatIconModule,
MatSnackBarModule,
MatSelectModule,
HttpClientModule,
MatProgressSpinnerModule,
MatDialogModule,
MatDividerModule,
MatProgressBarModule,
MatPaginatorModule,
MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
