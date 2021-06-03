import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Product} from "../../product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  agregarCarrito(){
    console.log('Se agrega ' + this.product.title + ' al carrito')
    this.productClicked .emit(this.product.id)
  }

}
