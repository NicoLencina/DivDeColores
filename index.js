let btnCrear = document.querySelector(".btnMagico");
let divMagico = document.querySelector(".divMagico");
let divContenedor = document.querySelector(".container");

let width = 0;
let height = 0;
let posiciones = String;
let colorDiv = String;

btnCrear.addEventListener("click", () => {
  todoEnUno();
  divMagico.style.backgroundColor = colorDiv;
  divMagico.style.width = width;
  divMagico.style.height = height;
  divContenedor.style.justifyContent = posiciones;
});

function todoEnUno() {
  let arrPosiciones = ["left", "right", "center"];
  let valores = "0123456789ABCDEF";
  let color = "#";
  let vueltas = "";
  for (let i = 0; i < 90; i++) {
    width = [Math.floor(Math.random() * 90)] + "vw";
    height = [Math.floor(Math.random() * 90)] + "vh";
  }
  for (let i = 0; i < arrPosiciones.length; i++) {
    posiciones =
      arrPosiciones[Math.floor(Math.random() * arrPosiciones.length)];
  }
  for (let x = 0; x < 6; x++) {
    vueltas += valores[Math.floor(Math.random() * valores.length)];
    colorDiv = color + vueltas;
  }
  console.log(vueltas);
}

/*
let tamañoDiv = () => {

for(let i = 0 ; i < 500 ; i++) {

    width= [Math.floor(Math.random()*500)] + 'px';
}
for(let i = 0 ; i < 500 ; i++) {

    height= [Math.floor(Math.random()*500)] + 'px';
} 
return [width,height];
}

let [ancho, alto] = tamañoDiv(); */
