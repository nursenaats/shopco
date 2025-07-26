import page from "page";
import HomePage from "@/pages/Home/Home";
import "./style.scss";

page("/", () => {
  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").appendChild(HomePage());
});

page();
