import { useState } from "react";
import Door from "../components/Door";
import Reward from "../components/Reward";
import DoorsModel from "../model/door";

export default function Home() {
  const [door, setDoor] = useState(new DoorsModel(1));

  return (
    <div>
      <Reward />
      <div style={{ display: "flex" }}>
        <Door door={door} />
      </div>
    </div>
  );
}
