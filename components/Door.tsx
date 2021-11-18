import styles from "../styles/Door.module.css";
import DoorsModel from "../model/door";

interface DoorProps {
  value: DoorsModel;
  onChange: (newDoor: DoorsModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.isSelected && !door.isOpen ? styles.selected : "";
  const toogleSelection = (e) => props.onChange(door.toggleSelection());
  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    );
  };

  return (
    <div className={styles.area} onClick={toogleSelection}>
      <div className={`${styles.frame} ${selected}`}>
        {door.isOpen ? false : renderDoor()}
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
