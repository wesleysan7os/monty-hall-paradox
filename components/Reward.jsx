import styles from "../styles/Reward.module.css";

export default function Reward() {
  return (
    <div className={styles.reward}>
      <div className={styles.cover}></div>
      <div className={styles.body}></div>
      <div className={styles["vertical-lace"]}></div>
      <div className={styles["horizontal-lace"]}></div>
    </div>
  );
}
