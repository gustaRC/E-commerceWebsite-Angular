import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'categories/:category', component: CategoryPageComponent},
  {path: 'products/:id', component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
