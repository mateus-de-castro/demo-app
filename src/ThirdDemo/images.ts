interface Image {
  src: string;
  alt: string;
}
const images: Image[] = Array.from(Array(6).keys()).map((i) => ({
  src: `images/${i + 1}.jpg`,
  alt: "Cute Cat",
}));
export default images;
