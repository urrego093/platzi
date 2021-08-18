import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy
} from '@angular/core';

import {Product} from "../../product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy
  // , OnChanges
{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();

  today: Date = new Date();

  constructor() {
    console.log("1. constructor");
  }

  // ngOnChanges(changes:SimpleChanges) {
  //   console.log("2. ngOnChanges");
  //   console.log(changes);
  // }

  ngOnInit(): void {
    console.log("3. ngOnInit");
  }

  ngDoCheck() {
      console.log("4. ngDoCheck");
    //   console.log(changes);
  }

  ngOnDestroy(){
    console.log("5. ngDoCheck");
  }

  agregarCarrito(){
    console.log('Se agrega ' + this.product.title + ' al carrito')
    this.productClicked .emit(this.product.id)
  }

}
