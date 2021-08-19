import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ProductComponent} from "./components/product/product.component";
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ContactComponent} from "./components/contact/contact.component";
import {DemoComponent} from "./components/demo/demo.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },

      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id' ,
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule {
}
