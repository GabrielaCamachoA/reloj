function modoOscuro() {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark", body.classList.contains("dark") ? "1" : "0");
}
window.onload = function () {
  if (localStorage.getItem("dark") == "1") {
    body.classList.add("dark");
  }
};

const reloj = document.getElementById("clock");
const contenedorNum = document.getElementById("numeros");

function posicionarNum(numero, index) {
  let angulo = (Math.PI / 180) * (90 - index * 30);
  let diametro = reloj.clientWidth * 0.8;
  let x = Math.cos(angulo) * (diametro / 2);
  let y = Math.sin(angulo) * (diametro / 2);

  numero.style.transform = `translate(calc(50% - ${-x}px), calc(50% - ${y}px))`;
}

for (let index = 1; index <= 12; index++) {
  let numero = document.createElement("span");
  numero.textContent = index;

  posicionarNum(numero, index);
  contenedorNum.appendChild(numero);
}

window.onresize = function () {
  console.log(contenedorNum.childNodes);
  contenedorNum.childNodes.forEach((element) => {
    posicionarNum(element, parseInt(element.textContent));
  });
};

const manecillasHoras = document.getElementById("horas");
const manecillasMinut = document.getElementById("minutos");
const manecillasSecond = document.getElementById("segundos");

function clockUpdate() {
  const date = new Date();

  const segundos = date.getSeconds();
  const minutos = date.getMinutes();
  const horas = date.getHours();

  const angleSecond = segundos * 6 + 180;
  const angleMinutes = minutos * 6 + segundos / 10 + 180;
  const angleHours = horas * 30 + minutos / 2 + 180;

  manecillasSecond.style.transform = `rotate(${angleSecond}deg)`;
  manecillasMinut.style.transform = `rotate(${angleMinutes}deg)`;
  manecillasHoras.style.transform = `rotate(${angleHours}deg)`;
}
clockUpdate();
setInterval(clockUpdate, 500);
