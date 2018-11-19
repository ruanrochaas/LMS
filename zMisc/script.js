listaUrl = ["./20170827_172329.jpg","./20170827_175105.jpg"];

let imagem = document.querySelector(".imagem");

console.log(imagem);

let indAtual = 0;

function mudaCor(){
    imagem.setAttribute("src",listaUrl[indAtual]);
    indAtual++;


    if(indAtual == listaUrl.length){
        console.log(listaUrl.length);
        indAtual = 0;
    }
}

var temporizador = setInterval(mudaCor,2000);