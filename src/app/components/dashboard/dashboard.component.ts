import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://cdn-icons-png.flaticon.com/512/1116/1116453.png';
  ciudad = '';
  temperatura = 0;
  temperaturaMax = 0;
  temperaturaMin = 0;
  humedad = 0;
  clima = '';
  locacion = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {

  }

  obtenerClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      console.log(data);
      this.temperatura = Math.round(data.main.temp);
      this.temperaturaMax = Math.round(data.main.temp_max);
      this.temperaturaMin = Math.round(data.main.temp_min);
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].description;
      this.locacion = data.name;
    },error => {
      console.log(error);
      this.loading = false;
      this.error();
    })
  }

  error() {
    this.mostrarError = true;

    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
