// posição inicial carros
let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 50;
let alturaCarro = 40;

let velocidadeCarro = 3.5;

/*
  function mostraCarro(){
  image(imagemCarros[0], xCarros[0], yCarros[0], comprimentoCarro,alturaCarro)
  image(imagemCarros[1], xCarros[1], yCarros[1], comprimentoCarro,alturaCarro)
  image(imagemCarros[2], xCarros[2], yCarros[2], comprimentoCarro,alturaCarro)
    image(imagemCarros[3], xCarros[3], yCarros[3], comprimentoCarro,alturaCarro)
    image(imagemCarros[4], xCarros[4], yCarros[4], comprimentoCarro,alturaCarro)
    image(imagemCarros[5], xCarros[5], yCarros[5], comprimentoCarro,alturaCarro)
} */

function mostraCarro(){
    for (let i = 0; i< imagemCarros.length; i++) {
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
    }
  }


function movimentaCarro(){
  xCarros[0] -= velocidadeCarro;
  xCarros[1] -= velocidadeCarro*2;
  xCarros[2] -= velocidadeCarro*3;
  xCarros[3] -= velocidadeCarro*1.5;
  xCarros[4] -= velocidadeCarro*3.5;
  xCarros[5] -= velocidadeCarro*2.7;
}

/*function movimentaCarro(){
    for (let i = 0; i< imagemCarros.length; i= i+1) {
      xCarros[i] -= velocidadeCarro[i + 2];
 }
}*/

/*function retornarInicio(){
  if (xCarros[0] < -50) {
    xCarros[0] = 600;
  } 
  if (xCarros[1] < -50) {
    xCarros[1] = 600;
  }
  
  if (xCarros[2] < -50) {
    xCarros[2] = 600;
  }
  
  if (xCarros[3] < -50) {
    xCarros[3] = 600;
  } 
  if (xCarros[4] < -50) {
    xCarros[4] = 600;
  }
  
  if (xCarros[5] < -50) {
    xCarros[5] = 600;
  }
} */

function retornarInicio(){
for (let i = 0; i< imagemCarros.length; i= i+1) {
   if (xCarros[i] < -50) {
    xCarros[i]= 600;
  } 
}
}