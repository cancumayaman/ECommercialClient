import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerModule } from './customers/customer.module';
import { OrderModule } from './orders/order.module';
import { ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomerModule,
    DashboardModule,
  ]
})
export class ComponentsModule { }
