import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NoPageFoundComponent } from "./no-page-found/no-page-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "products", component: ProductsComponent },
  { path: "product-detail/:id", component: ProductDetailComponent },
  { path: "404", component: NoPageFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
