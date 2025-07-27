import styles from "./Example.module.scss";

const Example = (pageTitle = "Example") => {
  const container = document.createElement("div");
  container.classList.add(styles.exampleRoot);
  container.innerHTML = `
    <h1>Example Page </h1>
    <p>Welcome to the ${pageTitle} Page!</p>
    `;
  return container;
};

export default Example;
