import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul className={styles.ul}>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="button">Login</button>
    </nav>
  );
}

export default Navigation;
