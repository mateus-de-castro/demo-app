import React, { useEffect, useState } from "react";
import style from "./styles";

export default function FirstDemo() {
  const name = useInput("");
  const surname = useInput("");
  const width = useWidth();

  useEffect(() => {
    document.title = `${name.value} ${surname.value}`;
  }, [name, surname]);

  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks - Getting Started</h1>
        <div className={style.container}>
          <span>Name</span>
          <input {...name} />
          <span>Surname</span>
          <input {...surname} />
          <span>Window Width: {width}</span>
        </div>
      </div>
    </div>
  );
}

function useInput(
  initialValue: string
): { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> } {
  const [value, setValue] = useState(initialValue);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.currentTarget.value);

  return { value, onChange };
}

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}
