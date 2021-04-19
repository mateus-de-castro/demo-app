import { IconButton } from "@fluentui/react";
import { useEffect, useState } from "react";
import style from "./styles";
import images from "./images";
import ProgressBar from "./progressBar";

const slideDuration = 3000;

export default function ThirdDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const timeout = setTimeout(
      () => setIndex((index + 1) % images.length),
      slideDuration
    );
    return () => clearTimeout(timeout);
  }, [index, isPlaying]);

  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks Demo - Making things more complex</h1>
        <div className={style.container}>
          <img {...images[index]} />
          <div className={style.menuContainer}>
            <ProgressBar
              playing={isPlaying}
              time={slideDuration}
              key={`${index}${isPlaying}`}
            />
            <IconButton
              title={isPlaying ? "Pause" : "Play"}
              iconProps={{ iconName: isPlaying ? "pause" : "play" }}
              onClick={() => setIsPlaying(!isPlaying)}
            />
            <IconButton
              title="Previous"
              iconProps={{ iconName: "previous" }}
              onClick={() =>
                setIndex((index - 1 + images.length) % images.length)
              }
            />
            <IconButton
              title="Next"
              iconProps={{ iconName: "next" }}
              onClick={() => setIndex((index + 1) % images.length)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
