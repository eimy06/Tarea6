import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weatherData: any = {};

  constructor() {}

  ngOnInit() {
    const apiKey = '4eacb2b8a22b387deee5c08f10464dd3'; 

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Santo+Domingo,do&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        this.weatherData = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
