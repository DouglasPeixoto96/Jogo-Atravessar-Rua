//ATOR Codigo
let yAtor = 366;
let xAtor = 100;
let colisao = false ;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 35, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3; 
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaColisao () {
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25);
    if (colisao){
     colidiu = (yAtor = 366, xAtor = 100)
    }
  }
}

function colidiu (){
  (yAtor = 366,xAtor = 100)
}

function incluiPontos (){
  text(meusPontos, width / 4, 27);
  fill(color(255, 240, 0))
  textSize(25)
  
}

function marcaPonto (){
  if (yAtor < 15) {
      meusPontos +=1;
      yAtor = 366;
      }
}