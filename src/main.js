import page from "page";
import HomePage from "@/pages/Home/Home";
import ProductDetailPage from "@/pages/ProductDetail/ProductDetail";
import "./style.scss";

page("/", () => {
  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").appendChild(HomePage());
});

page("/products/:productId", (context) => {
  const productID = context.params.productId;
  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").appendChild(ProductDetailPage(productID));
});
page();
