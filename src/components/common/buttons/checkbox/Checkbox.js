import styles from "./Checkbox.module.css";

function Checkbox({ onClick, isChecked }) {
  return (
    <div className={styles.mainContainer} onClick={onClick}>
      {isChecked ? <div className={styles.isChecked} /> : null}
    </div>
  );
}

export default Checkbox;
