import { ProgressIndicator } from "@fluentui/react";
import { FunctionComponent } from "react";
import { useProgress } from "../hooks";
import style from "./styles";

interface ProgressBarProps {
  playing: boolean;
  time: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  time,
  playing,
}: ProgressBarProps) => {
  const percent = useProgress({ time, playing });

  return (
    <ProgressIndicator
      percentComplete={percent}
      className={style.progressBar}
      barHeight={4}
    />
  );
};

export default ProgressBar;
