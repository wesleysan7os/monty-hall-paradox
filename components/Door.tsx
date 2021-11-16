import styles from "../styles/Door.module.css";
import DoorsModel from "../model/door";

interface DoorProps {
  door: DoorsModel;
}

export default function Door(props: DoorProps) {
  const { door } = props;
  const selected = door.isSelected ? styles.selected : "";
  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.knob}></div>
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
