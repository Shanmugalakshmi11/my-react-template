import styles from "./StandardBtn.module.css";

function StandardBtn({ onClick, text, style }) {
  return (
    <div className={styles.myBtn} style={style} onClick={onClick}>
      {text}
    </div>
  );
}

export default StandardBtn;
