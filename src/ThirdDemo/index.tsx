import { IconButton } from "@fluentui/react";
import style from "./styles";
import { images } from "./images";
import ProgressBar from "./progressBar";

const slideDuration = 3000;

export default function ThirdDemo() {
  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks - Picure Carousel</h1>
        <div className={style.container}>
          <img {...images[0]} />
          <div className={style.menuContainer}>
            <ProgressBar playing={false} time={slideDuration} />
            <IconButton title="Play" iconProps={{ iconName: "play" }} />
            <IconButton title="Previous" iconProps={{ iconName: "previous" }} />
            <IconButton title="Next" iconProps={{ iconName: "next" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
