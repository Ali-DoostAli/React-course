import { useState } from "react";
import WithCounter from "../hoc/WithCounter";
import ClickCounter from "./ClickCounter";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} Times.</h2>
    </div>
  );
};

export default WithCounter(HoverCounter, 10);
