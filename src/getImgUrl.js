function getImgUrl(image) {
  // If the image is a complete URL, return it directly.
  if (/^https?:\/\//.test(image)) {
    return image;
  }
  // Otherwise, assume it is a local asset.
  return new URL(`./assets/${image}`, import.meta.url).href;
}

export { getImgUrl };
