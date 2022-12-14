import {Component} from "@angular/core";


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  title: string = 'Contador app';
  count: number = 0;
  base: number = 5;

  public handleCount(value: number): void {
    this.count += value;
  }
}
