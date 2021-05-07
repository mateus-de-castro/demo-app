import { getPropsWithDefaults, IconButton } from "@fluentui/react";
import { useEffect, useReducer, useState } from "react";
import style from "./styles";
import {
  images,
  fetchAsyncImages,
  Image,
  loadingCat,
  errorCat,
} from "./images";
import ProgressBar from "./progressBar";

const slideDuration = 3000;

interface State {
  slide: number;
  playing: boolean;
}

type Action =
  | { type: "TOGGLE_PLAY" }
  | { type: "PROGRESS" }
  | { type: "NEXT" }
  | { type: "PREVIOUS" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_PLAY":
      return { ...state, playing: !state.playing };
    case "NEXT":
    case "PROGRESS":
      return {
        ...state,
        playing: action.type === "PROGRESS",
        slide: (state.slide + 1) % images.length,
      };
    case "PREVIOUS":
      return {
        ...state,
        playing: false,
        slide: (state.slide + images.length - 1) % images.length,
      };
    default:
      return state;
  }
}

export default function ThirdDemo() {
  const [state, dispatch] = useReducer(reducer, { playing: true, slide: 0 });

  useEffect(() => {
    if (state.playing) {
      const timeout = setTimeout(
        () => dispatch({ type: "PROGRESS" }),
        slideDuration
      );
      return () => clearTimeout(timeout);
    }
  }, [state.slide, state.playing]);

  return (
    <div className={style.root}>
      <div className={style.card}>
        <h1>React Hooks - Picure Carousel</h1>
        <div className={style.container}>
          <ImageComponent
            key={`${state.slide}`}
            fetch={fetchAsyncImages[state.slide]}
          />
          <div className={style.menuContainer}>
            <ProgressBar
              key={`${state.playing}+${state.slide}`}
              playing={state.playing}
              time={slideDuration}
            />
            <IconButton
              onClick={() => dispatch({ type: "TOGGLE_PLAY" })}
              title={state.playing ? "Pause" : "Play"}
              iconProps={{ iconName: state.playing ? "pause" : "play" }}
            />
            <IconButton
              onClick={() => dispatch({ type: "PREVIOUS" })}
              title="Previous"
              iconProps={{ iconName: "previous" }}
            />
            <IconButton
              onClick={() => dispatch({ type: "NEXT" })}
              title="Next"
              iconProps={{ iconName: "next" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageComponent(props: { fetch: () => Promise<Image> }) {
  const image = usePromise(props.fetch);

  if (image.isLoading) {
    return <img {...loadingCat} />;
  }

  if (image.error) {
    return <img {...errorCat} />;
  }

  return <img {...image.data} />;
}

function usePromise<T>(
  fetch: () => Promise<T>
): { isLoading: boolean; error: boolean; data: T | undefined } {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    async function startFetch() {
      setIsLoading(true);
      try {
        const data = await fetch();
        setData(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    startFetch();
  }, []);

  return { isLoading, error, data };
}
