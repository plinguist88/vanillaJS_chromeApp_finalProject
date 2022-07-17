const $body = document.body;

const url = 'https://source.unsplash.com/category/nature/1600x900';

function randomBg() {
  $body.style.backgroundImage = `url(${url})`;
}

randomBg();