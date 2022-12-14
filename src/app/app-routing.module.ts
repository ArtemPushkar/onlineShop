import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/base/base/base.component';
import { BasketComponent } from './components/basket/basket/basket.component';
import { ProductDetailsComponent } from './components/product-details/product-details/product-details.component';
import { ProductsComponent } from './components/products/products/products.component';

const routes: Routes = [
  {path: '', component: BaseComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'basket', component: BasketComponent},
  {path: '**', redirectTo: "", component: BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
