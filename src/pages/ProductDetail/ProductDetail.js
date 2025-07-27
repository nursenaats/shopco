import Example from "@/components/Example/Example";
import styles from "./ProductDetail.module.scss";

const ProductDetailPage=(productId) =>{
    const container  = document.createElement("div");
    container.classList.add(styles.productDetailRoot);

    container.appendChild(Example(`${productId} Product Detail`));

    return container;

};

export default ProductDetailPage;