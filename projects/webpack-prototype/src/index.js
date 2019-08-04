import createBanner from "./banner.js";

import WebpackImg from "./webpack-logo.png";

const createElement = message => {
  const element = document.createElement("div");
  element.innerHTML = message;
  return element;
};

const createImage = image => {
  const element = document.createElement("div");
  const imageElement = new Image();
  imageElement.src = image;
  element.appendChild(imageElement);
  return element;
};

document.body.appendChild(
  createElement("Webpack lives by the love of Open Source.")
);

document.body.appendChild(createBanner());
document.body.appendChild(createImage(WebpackImg));