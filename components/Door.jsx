import styles from "../styles/Door.module.css";

export default function Door(props) {
  return (
    <div className={styles.area}>
      <div className={styles.frame}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
