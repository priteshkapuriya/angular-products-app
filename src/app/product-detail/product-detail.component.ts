import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../service/data.service";
import { Input } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent {
  product_id: string;
  product: any = {};
  isAdded: boolean;

  constructor(
    private dataService: DataService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.product_id = this.actRoute.snapshot.params.id;
    this.product = this.dataService.getProductDetails(this.product_id);
    if (this.product.length === 0) {
      this.router.navigate(["404"]);
    }
  }
  addToCart() {
    this.isAdded = true;
    setTimeout(() => {
      this.isAdded = false;
    }, 2000);
  }
}
