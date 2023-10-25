import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {

  countryName: string = ''; 
  universities: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  searchUniversities() {
    // Realizar una solicitud a la API con el nombre del país
    const apiUrl = `http://universities.hipolabs.com/search?country=${this.countryName}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.universities = data;
    });
  }

}
