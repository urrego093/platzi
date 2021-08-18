import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  nombres = ['camilo', 'javier', 'johan']
  title = 'poaqui';
  power: number;

  constructor() { }

  ngOnInit(): void {
  }


  addItem() {
    this.nombres.push(  this.title )
  }

  deleteItem( index: number ){
    this.nombres.splice(index, 1)
  }

}
