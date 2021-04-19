import { TextField } from "@fluentui/react";
import { FormEvent, useState } from "react";
import SlowComponent from "./slowComponent";
import style from "./styles";

export default function FirstDemo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        <h1>React Hooks Demo - Memo</h1>
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
          <SlowComponent onBlah={() => {}} />
        </div>
      </div>
    </div>
  );
}
