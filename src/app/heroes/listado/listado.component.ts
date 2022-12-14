import {Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spider-man', 'Iron-man', 'Hulk', 'Thor','Captain america']
  deletedhero:string='';

  handleDeleteHeroe(index: number): void {
    this.deletedhero=this.heroes.splice(index,1)[0];
  }
}
