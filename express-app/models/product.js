const products = [];

module.exports = class Product {
  constructor(name, price, imagUrl, description) {
    this.name = name;
    this.price = price;
    this.imagUrl = imagUrl;
    this.description = description;
  }
  saveProduct() {
    products.push(this);
  }

  static getAll() {
    return products;
  }
};

// const product = product.getAll();
// const p = new product("samsun ", 1000, "1.jpg", "iyi telefon");
// p.saveProduct();
