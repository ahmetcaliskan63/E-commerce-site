const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  const product = Product.getAll();
  res.render("index", {
    title: "Homepage",
    products: product,
    path: "/",
  });
};

export const addPorduct = (req, res) => {x};

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    title: "Add a New Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(
    req.body.name,
    req.body.price,
    req.body.image,
    req.body.description
  );
  product.saveProduct();
  res.redirect("/");
};
