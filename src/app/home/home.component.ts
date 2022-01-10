
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
newSearch:any;
  news: any;
 unsub:Subscription;

  length:any;
  pageSize = 8;
  page = 1;

  constructor(
    private newsService: NewsServiceService,
    private snackBar: MatSnackBar  ) {}

  ngOnInit() {
    this.unsub = this.newsService
    .getData(
      `everything?q=general&pageSize=${this.pageSize}&page=${this.page}`
    )
    .subscribe(data => {
     console.log(data)
      this.news = data;
      this.length = data['totalResults'];
    });
  }

applyFilter(event:any){
  this.newSearch=event
  this.unsub = this.newsService
  .getData(
    `everything?q=${this.newSearch}&pageSize=${this.pageSize}&page=${this.page}`
  )
  .subscribe(data => {
   console.log(data)
    this.news = data;
    this.length = data['totalResults'];
  });
}
onPageChange(event:any) {
  console.log(event);
  this.unsub = this.newsService
    .getData(
      `everything?q=${this.newSearch}&pageSize=${
        this.pageSize
      }&page=${event.pageIndex + 1}`
    )
    .subscribe(data => {
      this.news = data;
      this.length = data['totalResults'];
    });
}



onFavorite(article:any) {
  console.log(article);

  let items = [];
  const val = localStorage.getItem('items');

  if (val !== null) {
    items = JSON.parse(val);
  }
  items.push(article);
  localStorage.setItem('items', JSON.stringify(items));
  this.snackBar.open('Favorite Added', 'Ok', {
    duration: 3000
  });
}

readMore(url:any) {
  window.open(url);
}
ngOnDestroy() {
  this.unsub.unsubscribe();
}
}
