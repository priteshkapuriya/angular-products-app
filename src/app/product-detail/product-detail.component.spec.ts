import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ProductDetailComponent } from "./product-detail.component";
import { DataService } from "../service/data.service";

describe("ProductDetailComponent", () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [DataService],
      declarations: [ProductDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    component.product = [
      {
        id: "490000073",
        name: "Tata Iodised Salt 1 kg",
        description:
          "Tata Iodised Salt is the best choice for everyday cooking, has a plethora of health benefits and is a great addition to your diet for maintaining a healthy lifestyle.",
        price: "₹ 399.00",
        availablity: "A",
        img: "assets/tata-iodised-salt-1-kg-0-20200621.jpeg",
      },
    ];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
