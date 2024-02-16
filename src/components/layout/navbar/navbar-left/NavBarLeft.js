import AppData from "../../../../utils/AppData";
import styles from "./NavBarLeft.module.css";

function NavBarLeft() {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.logImg} src={AppData.logo} alt="logo" />
    </div>
  );
}

export default NavBarLeft;
