import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name!: string;
  speed!:number;
  model!:string;
  colors!:Colors;
  options!:string[];
  test:any;


  constructor() { }

  ngOnInit(): void {
    this.name="Audi";
    this.speed=235;
    this.model="RS8";
    this.colors={
      car: 'White',
      salon: 'Black',
      wheels:'Silver'

    };
    this.options= ["ABS","Auto-parcking"];
    this.test=1;
  }

}
interface Colors{
  car:string;
  salon:string;
  wheels:string;
}
