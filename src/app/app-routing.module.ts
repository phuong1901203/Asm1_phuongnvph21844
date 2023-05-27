import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "admin", component: AdminProductComponent},
  {path: "admin/add", component: AddProductComponent},
  {path: "admin/:id/edit", component: UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
