import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  Products = {};
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.Products = this.dataService.getProducts();
  }
}
