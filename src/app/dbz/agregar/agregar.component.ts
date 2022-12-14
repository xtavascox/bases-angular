import {Component, Input} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private readonly dbzService: DbzService) {
  }

  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public handleSubmit(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return
    }
    // this.onNewCharacter.emit(this.nuevo);
    this.dbzService.handleAdd(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
