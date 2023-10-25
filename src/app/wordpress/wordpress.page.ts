import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.page.html',
  styleUrls: ['./wordpress.page.scss'],
})
export class WordpressPage implements OnInit {

  newsItems: any[] = [];

  constructor() {}

  ngOnInit() {
    const apiKey = '0ee135f213e34311b50d31d2377be643';

    axios
      .get(`https://newsapi.org/v2/top-headlines?sources=usa-today&apiKey=${apiKey}&pageSize=3`)
      .then((response) => {
        if (response.data.articles) {
          this.newsItems = response.data.articles;
        }
      });
  }
}