import {NgModule} from "@angular/core";
import {HeroeComponent} from "./heroe/heroe.component";
import {CommonModule} from "@angular/common";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[HeroeComponent, ListadoComponent],
  imports: [
    CommonModule
  ],
  exports:[HeroeComponent,ListadoComponent]
})

export class HeroesModule{}
