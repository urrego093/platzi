import {AfterViewInit, Component, OnInit} from '@angular/core';
import Swiper from "swiper";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {

  images: String [] = [
    "assets/images/banner-1.jpg",
    "assets/images/banner-2.jpg",
    "assets/images/banner-3.jpg"
  ];


  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
