let lista_grupos = [
    {
        groupName: "Mumu69", 
        groupID:"mumu69"
    },
    {
        groupName: "Pedro Italo s2", 
        groupID:"pedroitalo"
    },
    {
        groupName: "Talarico's Little Show", 
        groupID:"talarico"
    }
];
let lista_msgs = [
    {
        groupID: "mumu69",
        mensagens: [
            {
                userName: "mumu69",
                message: "EEeeeeiiii, má!!"
            },
            {
                userName: "Eu",
                message: "Diz"
            },
            {
                userName: "mumu69",
                message: "O q tem q fazer no trabalho de Direção de Arte?"
            }
        ]
    },
    {
        groupID: "pedroitalo",
        mensagens: [
            {
                userName: "Pedro Italo s2",
                message: "EEeeeeiiii, má!!"
            },
            {
                userName: "Eu",
                message: "Diz"
            },
            {
                userName: "Pedro Italo s2",
                message: "O q tem q fazer no trabalho de Direção de Arte?"
            }
        ]
    },
    {
        groupID: "talarico",
        mensagens: [
            {
                userName: "Rosca Polonesa",
                message: "Bla bla bla o bubba"
            },
            {
                userName: "Eu",
                message: "Elogia os bolos dele, má"
            },
            {
                userName: "Crush do gil",
                message: "Nunca ele pode corta a merda do cabelo e fica na dele"
            },
            {
                userName: "Plano b",
                message: "Nunca ele pode corta a merda do cabelo e fica na dele"
            }
        ]
    },
];

let url = "http://rest.learncode.academy/api/ruan/";

function setGrupos(){
    let xhttp = new XMLHttpRequest();
    let urlGrupos = url + "grupos";
    xhttp.open('POST', urlGrupos, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify(lista_grupos));
}

function setMsgs(){
    for (let index = 0; index < lista_msgs.length; index++) {
        let xhttp = new XMLHttpRequest();
        let urlMsgs = url + lista_msgs[index].groupID;
        xhttp.open('POST', urlMsgs, true);
        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.send(JSON.stringify(lista_msgs[index].mensagens));
    }
}


function getGrupos(){
    let xhttp = new XMLHttpRequest();
    let urlGrupos = url + "grupos";
    xhttp.open('GET', urlGrupos, true);

    xhttp.onload = function () {
        if(this.status == 200){
            if (this.responseText == "[]") {
                setGrupos();
                alert("Carregando Conversas...")
                window.location.reload();
            } else {
                amigos(JSON.parse(this.responseText));
            }
        }
    }
    xhttp.send();
}

getGrupos();

function getMsgs(nome, id){
    let xhttp = new XMLHttpRequest();
    let urlMsgs = url + id;
    xhttp.open('GET', urlMsgs, true);

    xhttp.onload = function () {
        if(this.status == 200){
            if(this.responseText == "[]"){
                setMsgs();
                alert("Carregando mensagens. Clique novamente no nome.");
            }
            carregarConv(nome, JSON.parse(this.responseText))
        }
    }
    xhttp.send();
}

function carregarConv(nome, lista) {
    let element = document.getElementById("msgs-conv");
    let titulo = document.querySelector(".nome-conv");
    element.innerHTML = "";
    titulo.innerText = "";
    let text = document.createTextNode(nome);
    titulo.appendChild(text);

    for(let msg of lista[0]){
        let li = document.createElement("li");
        let tit = document.createElement("div");
        let txt = document.createElement("div");
        let h4 = document.createElement("h4");
        let p = document.createElement("p");

        tit.className = 'msg-tit';
        txt.className = 'msg-txt';

        h4.innerText = msg.userName;
        p.innerText = msg.message;

        txt.appendChild(p);
        tit.appendChild(h4);
        li.appendChild(tit);
        li.appendChild(txt);
        element.appendChild(li);
    }
}

function amigos(lista){
    let element = document.getElementById("org-list-amig");
    
    for(let indiceEle in lista[0]){
        let li = document.createElement("li");
        let a = document.createElement("a");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        
        div.className = 'foto';
        h2.className = 'nome';

        a.addEventListener("click", ()=>{
            getMsgs(lista[0][indiceEle].groupName, lista[0][indiceEle].groupID);
        });

        a.setAttribute('href', '#');

        h2.innerText = lista[0][indiceEle].groupName;
        a.appendChild(div);
        a.appendChild(h2);
        li.appendChild(a);
    
        element.appendChild(li);
    }
}