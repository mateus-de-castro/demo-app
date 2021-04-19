/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

interface Props {
  onBlah: () => void;
}

function SlowComponent({ onBlah }: Props) {
  const renderCounter = useRef(1);
  const nothing = useRef(0);

  for (let i = 0; i < 1e7; i += 1) {
    nothing.current += i;
  }

  useEffect(() => {
    renderCounter.current += 1;
  });

  return <span>Slow Component Rendered {renderCounter.current} times</span>;
}

export default SlowComponent;
