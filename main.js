function playSound(idAudioElement) {
  const elemento = document.querySelector(idAudioElement);

  if(elemento && elemento.localName==='audio'){
    elemento.play();
  }else{
    console.log("Elemento não encontrado");
  }

}

const keyList = document.querySelectorAll(".tecla");

for (let counter = 0; counter < keyList.length; counter ++) {

  const key = keyList[counter];  
  const instrument = key.classList[1]; 
  const idAudio = `#som_${instrument}`;  

  key.onclick = function(){
    playSound(idAudio)
  }

  key.onkeydown = function(evento){
    if(evento.code === 'Enter' || evento.code === 'Space'){
      key.classList.add('ativa');
    }
  }

  key.onkeyup = function(){
    key.classList.remove('ativa');
  }

}
