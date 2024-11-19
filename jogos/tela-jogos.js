var jogos = document.getElementsByClassName("item-jogos");
const joysk = document.getElementById('joy')
const botaoo = document.getElementById('botaoum')
const botao2 = document.getElementById('botaodois')

var atual = 0;
jogos[atual].classList.add("item-selecionado");

document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
        if (atual + 1 != jogos.length) {
            atual++;
            for (let i = 0; i < jogos.length; i++) {
                jogos[i].classList.remove("item-selecionado");
            }

            jogos[atual].classList.add("item-selecionado");
            jogos[atual].style.display = "flex";
        } else {
            jogos[jogos.length - 1].classList.add("item-selecionado");
        }
        joysk.src='../midia/frame3frente.png'
        setTimeout(function() {
            joysk.src='../midia/frame1normal.png'
        }, 100);
    }

    if (event.key == "ArrowDown") {
        if (atual != 0) {
            atual--;
            for (let i = 0; i < jogos.length; i++) {
                jogos[i].classList.remove("item-selecionado");
            }

            jogos[atual].classList.add("item-selecionado");
        } else {
            jogos[atual].classList.add("item-selecionado");
        }
        joysk.src='../midia/frame2tras.png'
            setTimeout(function() {
                joysk.src='../midia/frame1normal.png'
            }, 100);
    }
    if(event.key == '1'){
        botaoo.src='../midia/botao2.png'
        setTimeout(function(){
            botaoo.src='../midia/botao1.png'
        }, 100);
    }
    
    if(event.key == '2'){
        botao2.src='../midia/botao4.png'
        setTimeout(function(){
            botao2.src='../midia/botao3.png'
        }, 100);
    }
});
