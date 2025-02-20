import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:productId', component: ProductDetailComponent},
    {path: 'conversor', component: TemperatureConverterComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
