import { TextField } from "@fluentui/react";
import { FormEvent, useEffect, useState } from "react";
import style from "./styles";

export default function FirstDemo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  const handleFirstNameChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFirstName(e.currentTarget.value);
  const handleLastNameChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setLastName(e.currentTarget.value);

  document.title = `${firstName} ${lastName}`;

  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks Demo - Getting Started</h1>
        <div className={style.container}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <p>{`Window Width: ${width}`}</p>
        </div>
      </div>
    </div>
  );
}
