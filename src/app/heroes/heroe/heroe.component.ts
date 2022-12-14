import {Component} from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Iron-man';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase()
  }

  public obtenerNombre(): string {
    return `${this.nombre}-${this.edad}`
  }

  public cambiarNombre(): void {
    this.nombre = 'spider-man';
  }

  public cambiarEdad(): void {
    this.edad = 30;
  }
}
