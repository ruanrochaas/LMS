var lista_Ami = [
    {
        usuario: "mumu69",
        mensagens: [
            {
                usuario: "mumu69",
                texto: "EEeeeeiiii, má!!"
            },
            {
                usuario: "Eu",
                texto: "Diz"
            },
            {
                usuario: "mumu69",
                texto: "O q tem q fazer no trabalho de Direção de Arte?"
            }
        ]
    },
    {
        usuario: "Pedro Italo s2",
        mensagens: [
            {
                usuario: "Pedro Italo s2",
                texto: "EEeeeeiiii, má!!"
            },
            {
                usuario: "Eu",
                texto: "Diz"
            },
            {
                usuario: "Pedro Italo s2",
                texto: "O q tem q fazer no trabalho de Direção de Arte?"
            }
        ]
    },
    {
        usuario: "Talarico's Little Show",
        mensagens: [
            {
                usuario: "Rosca Polonesa",
                texto: "Bla bla bla o bubba"
            },
            {
                usuario: "Eu",
                texto: "Elogia os bolos dele, má"
            },
            {
                usuario: "Crush do gil",
                texto: "Nunca ele pode corta a merda do cabelo e fica na dele"
            },
            {
                usuario: "Plano b",
                texto: "Nunca ele pode corta a merda do cabelo e fica na dele"
            }
        ]
    },
]

function carregarConv(a) {
    let element = document.getElementById("msgs-conv");
    element.innerHTML = "";

    switch (a) {
        case 0:
            for(let msg of lista_Ami[a].mensagens){
                let li = document.createElement("li");
                let tit = document.createElement("div");
                let txt = document.createElement("div");
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
    
                tit.className = 'msg-tit';
                txt.className = 'msg-txt';
    
                h4.innerText = msg.usuario;
                p.innerText = msg.texto;

                txt.appendChild(p);
                tit.appendChild(h4);
                li.appendChild(tit);
                li.appendChild(txt);
                element.appendChild(li);
            }
            break;
        case 1:
            for(let msg of lista_Ami[a].mensagens){
                let li = document.createElement("li");
                let tit = document.createElement("div");
                let txt = document.createElement("div");
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
    
                tit.className = 'msg-tit';
                txt.className = 'msg-txt';
    
                h4.innerText = msg.usuario;
                p.innerText = msg.texto;

                txt.appendChild(p);
                tit.appendChild(h4);
                li.appendChild(tit);
                li.appendChild(txt);
                element.appendChild(li);
            }
            break;
        case 2:
            for(let msg of lista_Ami[a].mensagens){
                let li = document.createElement("li");
                let tit = document.createElement("div");
                let txt = document.createElement("div");
                let h4 = document.createElement("h4");
                let p = document.createElement("p");
    
                tit.className = 'msg-tit';
                txt.className = 'msg-txt';
    
                h4.innerText = msg.usuario;
                p.innerText = msg.texto;

                txt.appendChild(p);
                tit.appendChild(h4);
                li.appendChild(tit);
                li.appendChild(txt);
                element.appendChild(li);
            }
            break;
    
        default:
            break;
    }
    /* let li = document.createElement("li");
    let tit = document.createElement("div");
    let txt = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    tit.className = 'msg-tit';
    txt.className = 'msg-txt';

    h4.innerText = ;
    p.innerText = ;

    for(let ele of lista_Ami){
        for(let msg of ele.mensagens){
            let li = document.createElement("li");
            let tit = document.createElement("div");
            let txt = document.createElement("div");
            let h4 = document.createElement("h4");
            let p = document.createElement("p");

            tit.className = 'msg-tit';
            txt.className = 'msg-txt';

            h4.innerText = msg.usuario;
            p.innerText = msg.texto;
        }
    } */
}

function amigos(){
    let element = document.getElementById("org-list-amig");
    let cont = 0;
    
    for(let ele of lista_Ami){
        let li = document.createElement("li");
        let a = document.createElement("a");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
    
        div.className = 'foto';
        h2.className = 'nome';
    
        switch (cont) {
            case 0:
                a.setAttribute('onclick', 'carregarConv(0)');
                break;
            case 1:
                a.setAttribute('onclick', 'carregarConv(1)');
                break;
            case 2:
                a.setAttribute('onclick', 'carregarConv(2)');
                break;
        
            default:
                break;
        }

        a.setAttribute('href', '#');
        
        h2.innerText = ele.usuario;
        a.appendChild(div);
        a.appendChild(h2);
        li.appendChild(a);
    
        element.appendChild(li);
        cont += 1;
    }
}

amigos();