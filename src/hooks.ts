import { useState, useEffect } from "react";

export function useProgress({
  playing,
  time,
}: {
  playing: boolean;
  time: number;
}): number {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!playing) {
      return;
    }

    let start: number | undefined;
    let ref: number;
    const handleAnimation = (timeStamp: number) => {
      if (start === undefined) {
        start = timeStamp;
      }
      setPercent((timeStamp - start) / time);
      ref = requestAnimationFrame(handleAnimation);
    };

    ref = requestAnimationFrame(handleAnimation);
    return () => cancelAnimationFrame(ref);
  }, []);

  return percent;
}
