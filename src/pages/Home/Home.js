import Example from "@/components/Example/Example";
import styles from "./Home.module.scss";

const HomePage = () => {
  const container = document.createElement("div");
  container.classList.add(styles.homeRoot);
  container.appendChild(Example());
  return container;
};

export default HomePage;
