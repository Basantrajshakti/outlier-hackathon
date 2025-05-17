// utils/loadFonts.ts
export const loadFont = (
  name: string,
  url: string,
  weight: number,
  style = "normal",
) => {
  const font = new FontFace(name, `url(${url})`, {
    weight: String(weight),
    style,
    display: "swap",
  });

  return font.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
  });
};
