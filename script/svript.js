const ul = document.querySelector(`ul`);

function changeColor(color) {
  document.body.style.background = color;

  if (color === `black`) {
    ul.style.color = `white`;
  } else {
    ul.style.color = `black`;
  }
}
