function makeH1(headerText) {
  const header = document.createElement("h1");
  header.textContent = headerText;
  return header;
}

function makeImg(imgURL, imgALT) {
  const img = document.createElement("img");
  img.src = imgURL;
  img.alt = imgALT;
  return img;
}

function makePara(paraText) {
  const para = document.createElement("p");
  para.textContent = paraText;
  return para;
}

export {
    makeH1,
    makeImg,
    makePara
};