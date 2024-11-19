const joysk = document.getElementById('joy')
const botaoo = document.getElementById('botaoum')
const botao2 = document.getElementById('botaodois')


document.addEventListener('keydown',function(event){
    if(event.key == 's' || event.key == 'S' || event.key == 'ArrowDown'){
        joysk.src='imagens/frame2tras.png'
        setTimeout(function() {
            joysk.src='imagens/frame1normal.png'
        }, 100);
    }

    if(event.key =='w'|| event.key == 'W' || event.key == 'ArrowUp'){
   
        joysk.src='imagens/frame3frente.png'
        setTimeout(function() {
            joysk.src='imagens/frame1normal.png'
        }, 100);
    }

    if(event.key == '1'){
        botaoo.src='imagens/botao2.png'
        setTimeout(function(){
            botaoo.src='imagens/botao1.png'
        }, 100);
    }

    if(event.key == '2'){
        botao2.src='imagens/botao4.png'
        setTimeout(function(){
            botao2.src='imagens/botao3.png'
        }, 100);
    }

    
})



