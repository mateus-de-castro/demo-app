export interface Image {
  src: string;
  alt: string;
}

export const images: Image[] = Array.from(Array(6).keys()).map((i) => ({
  src: `images/${i + 1}.jpg`,
  alt: "Cute Cat",
}));

export const loadingCat: Image = {
  src: `images/loading.gif`,
  alt: "Loading Cat",
};

export const errorCat: Image = {
  src: `images/404.jpg`,
  alt: "404 Cat",
};

export const fetchAsyncImages: (() => Promise<Image>)[] = images.map((image, idx) => async () => {
    const delay = 1000 + Math.random()*3000;
    await waitFor(delay, idx === 3);

    return image;
  });

function waitFor(time: number, shouldReject : boolean = false): Promise<void> {
  return new Promise(
    (resolve, reject) => setTimeout(
      () => shouldReject ? reject() : resolve(), time
    )
  );
}

