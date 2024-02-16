import styles from "./NavigationBar.module.css";
import NavBarLeft from "./navbar-left/NavBarLeft";
import NavBarRight from "./navbar-right";

function NavigationBar() {
  return (
    <div className={`${styles.mainContainer} border-bottom-shadow`}>
      <NavBarLeft />
      <div className={styles.spacer} />
      <NavBarRight />
    </div>
  );
}

export default NavigationBar;
