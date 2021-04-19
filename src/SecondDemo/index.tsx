/* eslint-disable no-console */
import { PrimaryButton } from "@fluentui/react";
import React from "react";
import style from "./styles";

interface Props {}

interface State {
  count: number;
}

export default class SecondDemo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(`You cliked ${this.state.count} times`);
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You cliked ${this.state.count} times`);
    }, 3000);
  }

  render() {
    return (
      <div className={style.root}>
        <div className={style.card}>
          <h1>React Hooks - Predictability</h1>
          <div className={style.container}>
            <PrimaryButton
              onClick={() =>
                this.setState((state) => ({
                  count: state.count + 1,
                }))
              }
            >
              Add One
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}
