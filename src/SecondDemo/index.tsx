/* eslint-disable no-console */
import { PrimaryButton } from "@fluentui/react";
import React, { useEffect, useRef, useState } from "react";
import style from "./styles";

interface Props {}

interface State {
  count: number;
}

export default function SecondDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
    setTimeout(() => {
      console.log(`You cliked ${countRef.current} times`);
    }, 3000);
  }, [count]);

  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks - Predictability</h1>
        <div className={style.container}>
          <PrimaryButton onClick={() => setCount(count + 1)}>
            Add One
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
