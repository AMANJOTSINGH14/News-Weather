import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
general:any;
country:any='';
  news:any;
  sources = [
    {
      id: 'in',
      name: 'INDIA'
    },
    {
      id: 'us',
      name: 'USA'
    },
    {
      id: 'ae',
      name: 'UAE'
    },
    {
      id: 'al-jazeera-english',
      name: 'Al Jazeera English'
    }
  ];
selected='Aftenposten'
  categories = [
    'General',
    'Health',
    'Business',
    'Technology',
    'Entertainment',
    'Sports',
    'Science',
    'Coronavirus'
  ];

  constructor(private newsService: NewsServiceService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getCategoryData(this.categories[0]);
  }

  onGetCategoryData(category:any) {
    console.log(category);
    this.getCategoryData(category);
  }

  getCategoryData(category:any) {
    this.general=category.toLowerCase()
    if(this.country=='' || this.country==null){
      this.newsService
      .getData(`everything?q=world`)
      .subscribe(data => {
       console.log(data)
        this.news = data;
      });
    }
    else{
    this.newsService
      .getData(`top-headlines?country=${this.country}&category=${this.general}`)
      .subscribe(data => {
       console.log(data)
        this.news = data;
      });
    }
  }
  selectedValue(event:any) {
 this.country=event.value
    console.log(event)
    this.newsService
    .getData(`top-headlines?country=${event.value}&category=${this.general.toLowerCase()}`)
    .subscribe(data => {
     console.log(data)
      this.news = data;
    });
  }


  // onFavorite(article) {
  //   console.log(article);

  //   let items = [];
  //   const val = localStorage.getItem('items');

  //   if (val !== null) {
  //     items = JSON.parse(val);
  //   }
  //   items.push(article);
  //   localStorage.setItem('items', JSON.stringify(items));
  //   this.snackBar.open('Favorite Added', 'Ok', {
  //     duration: 3000
  //   });
  // }

  readMore(url:any) {
    window.open(url);
  }
}
