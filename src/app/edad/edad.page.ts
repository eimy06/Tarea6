import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage {

  nombre: string = '';
  grupoEdad: string = '';
  imagen: string = '';

  constructor(private http: HttpClient) {}

  calcularEdad() {
    const apiUrl = `https://api.agify.io/?name=${this.nombre}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.age) {
        const edad = data.age;
        this.mostrarGrupoEdad(edad);
      } else {
        this.grupoEdad = 'Edad desconocida';
        this.imagen = '';
      }
    });
  }

  mostrarGrupoEdad(edad: number) {
    if (edad <= 35) {
      this.grupoEdad = 'Joven';
      this.imagen = 'assets/joven.jpg';

    } else if (edad <= 65) {
      this.grupoEdad = 'Adulto';
      this.imagen = 'assets/adulto.jpg';
    } else {
      this.grupoEdad = 'Anciano';
      this.imagen = 'assets/anciano.jpg';
    }
  }
}