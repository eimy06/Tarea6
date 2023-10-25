import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage {

  nombre: string = '';
  genero: string = '';

  constructor(private http: HttpClient) {}

  predecirGenero() {
    // Hacer una solicitud a la API de Genderize con el nombre ingresado
    const apiUrl = `https://api.genderize.io/?name=${this.nombre}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.gender) {
        this.genero = data.gender;
      } else {
        this.genero = 'Género desconocido';
      }
    });
  }

}
