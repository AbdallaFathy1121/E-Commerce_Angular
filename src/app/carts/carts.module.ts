import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: CartComponent},
    ])
  ]
})
export class CartsModule { }
