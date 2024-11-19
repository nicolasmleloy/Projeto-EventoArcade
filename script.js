const joysk = document.getElementById('joy')
const botaoo = document.getElementById('botaoum')
const botao2 = document.getElementById('botaodois')

var itemMenu = document.getElementsByClassName("item-menu");
var seta = document.querySelectorAll(".cada-menu img");
 
 
var atual = 0;
itemMenu[atual].classList.add("item-selecionado");
seta[atual].style.display = "flex";

var global = 0

document.addEventListener('keydown',function(event){
    if(event.key == 's' || event.key == 'S' || event.key == 'ArrowDown'){
        if (atual + 1 != itemMenu.length) {
            atual++;
            console.log(itemMenu[atual].textContent)

            global = atual
            

            for (let i = 0; i < itemMenu.length; i++) {
                seta[i].style.display = "none";
                itemMenu[i].classList.remove("item-selecionado");
                itemMenu[i].classList.add("item-menu");
            }
 
            itemMenu[atual].classList.add("item-selecionado");
            seta[atual].style.display = "flex";
        } else {
            itemMenu[itemMenu.length - 1].classList.add("item-selecionado");
        }

        joysk.src='midia/frame2tras.png'
        setTimeout(function() {
            joysk.src='midia/frame1normal.png'
        }, 100);
    }

    if(event.key =='w'|| event.key == 'W' || event.key == 'ArrowUp'){
        if (atual != 0) {
            atual--;
            console.log(itemMenu[atual])

            global = atual


            for (let i = 0; i < itemMenu.length; i++) {
                seta[i].style.display = "none";
                itemMenu[i].classList.remove("item-selecionado");
                itemMenu[i].classList.add("item-menu");
            }
 
            itemMenu[atual].classList.add("item-selecionado");
            seta[atual].style.display = "flex";
        } else {
            itemMenu[atual].classList.add("item-selecionado");
        }
   
        joysk.src='midia/frame3frente.png'
        setTimeout(function() {
            joysk.src='midia/frame1normal.png'
        }, 100);
    }

    if(event.key == '1'){
        botaoo.src='midia/botao2.png'
        setTimeout(function(){
            if(global == 0){
                window.location.href = './inscreva-se/inscreva-se.html'
            }
            botaoo.src='midia/botao1.png'
        }, 100);
    }

    if(event.key == '2'){
        botao2.src='midia/botao4.png'
        setTimeout(function(){
            botao2.src='midia/botao3.png'
        }, 100);
    }

    
})



/*Parte Nicolas*/

var contador = document.querySelector("#contador-dias p");
 
const dataAlvo = new Date("2024-12-31T23:59:59");
 
function calcularTempoRestante() {
    const agora = new Date();
 
    const diferencaTempo = dataAlvo - agora;
 
    if (diferencaTempo <= 0) {
        return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
 
    const dias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
        (diferencaTempo % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((diferencaTempo % (1000 * 60)) / 1000);
 
    return { dias, horas, minutos, segundos };
}
 
function atualizarContador() {
    const tempoRestante = calcularTempoRestante();
 
    contador.innerHTML = `Faltam ${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos e ${tempoRestante.segundos} segundos`;
}
 
setInterval(atualizarContador, 1000);


