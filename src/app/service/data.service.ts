import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  getProducts() {
    return [
      {
        id: "490005640",
        name: "Daawat Devaaya Basmati Rice 5 kg",
        description:
          "Daawat Devaaya Basmati Rice is an exotic range of rice that promises both quality and taste. It is pearly white, extra-long and extra fine.",
        price: "₹ 399.00",
        availablity: "O",
        img: "assets/daawat-devaaya-basmati-rice-5-kg-0-20200701.jpg",
      },
      {
        id: "490000038",
        name: "Aashirvaad Whole Wheat Atta 5 kg",
        description:
          "Aashirvaad Whole Wheat Atta is made from the choicest wheat grains that have been selected and processed to get the best whole wheat atta.",
        price: "₹ 210.00",
        availablity: "A",
        img: "assets/aashirvaad-whole-wheat-atta-5-kg-0-20200621.jpeg",
      },
      {
        id: "490503479",
        name: "Kissan Fresh Tomato Ketchup 950 g",
        description:
          "Kissan Fresh Tomato Ketchup - this one’s definitely a winner when it comes to cajoling your kids into eating their food.Its made from the 100% real juicy tomatoes.",
        price: "₹ 104.00",
        availablity: "A",
        img: "assets/kissan-fresh-tomato-ketchup-950-g-0-20200621.jpeg",
      },
      {
        id: "490005648",
        name: "Saffola Gold Edible Vegetable Blended Oil 5 L (Jar)",
        description:
          "Saffola Gold Edible Vegetable Blended Oil has fatty acids to help give you a balance of MUFA and PUFA",
        price: "₹ 765.00",
        availablity: "A",
        img:
          "assets/saffola-gold-edible-vegetable-blended-oil-5-l-jar--0-20200621.jpeg",
      },
      {
        id: "491186625",
        name: "Good Life Almonds 500 g",
        description:
          "Almonds have long been revered as the epitome of health and wellness and are a must-have addition to your daily health plan.",
        price: "₹ 379.00",
        availablity: "A",
        img: "assets/good-life-almonds-500-g-0-20200628.jpg",
      },
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
  }

  getProductDetails(productId) {
    let products = this.getProducts();
    const product = products.filter((item) => item.id === productId);
    return product;
  }
}
