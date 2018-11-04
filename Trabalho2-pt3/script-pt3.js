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
    for(let obj of lista_grupos){
        let xhttp = new XMLHttpRequest();
        let urlGrupos = url + "grupos";
        xhttp.open('POST', urlGrupos, true);
        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.send(JSON.stringify(obj));
    }
}

function setMsgs(){
    for (let index = 0; index < lista_msgs.length; index++) {
        for(let obj of lista_msgs[index].mensagens){
            let xhttp = new XMLHttpRequest();
            let urlMsgs = url + lista_msgs[index].groupID;
            xhttp.open('POST', urlMsgs, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.send(JSON.stringify(obj));
        }
    }
}


function getGrupos(){
    let grupos = document.querySelector(".org-list-amig");
    grupos.innerHTML = "";
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

function getMsgs(nome, id){
    idConvAtual = id;
    let xhttp = new XMLHttpRequest();
    let urlMsgs = url + id;
    xhttp.open('GET', urlMsgs, true);

    xhttp.onload = function () {
        if(this.status == 200){
            if(this.responseText == "[]"){
                setMsgs();
                alert("Carregando mensagens. Clique novamente no nome.");
            };
            carregarConv(nome, JSON.parse(this.responseText));
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

    for(let msg of lista){
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

function carregarUmaConv(id, msg) {
    let element = document.getElementById("msgs-conv");

    let li = document.createElement("li");
    let tit = document.createElement("div");
    let txt = document.createElement("div");
    let h4 = document.createElement("h4");
    let p = document.createElement("p");

    tit.className = 'msg-tit';
    txt.className = 'msg-txt';

    h4.innerText = id;
    p.innerText = msg;

    txt.appendChild(p);
    tit.appendChild(h4);
    li.appendChild(tit);
    li.appendChild(txt);
    element.appendChild(li);
}

function amigos(lista){
    let element = document.getElementById("org-list-amig");
    
    for(let indiceEle in lista){
        let li = document.createElement("li");
        let a = document.createElement("a");
        let div = document.createElement("div");
        let h2 = document.createElement("h2");

        div.className = 'foto';
        h2.className = 'nome';

        a.addEventListener("click", ()=>{
            getMsgs(lista[indiceEle].groupName, lista[indiceEle].groupID);
        });

        a.setAttribute('href', '#');

        h2.innerText = lista[indiceEle].groupName;
        a.appendChild(div);
        a.appendChild(h2);
        li.appendChild(a);
    
        element.appendChild(li);
    }
}

function umAmigo(nome, id){
    let element = document.getElementById("org-list-amig");
    let li = document.createElement("li");
    let a = document.createElement("a");
    let div = document.createElement("div");
    let h2 = document.createElement("h2");

    div.className = 'foto';
    h2.className = 'nome';

    a.addEventListener("click", ()=>{
        getMsgs(nome, id);
    });

    a.setAttribute('href', '#');

    h2.innerText = nome;
    a.appendChild(div);
    a.appendChild(h2);
    li.appendChild(a);

    element.appendChild(li);
}

function criarCampoMsg(){
    let conversa = document.querySelector(".conversa");

    let form = document.createElement("form");
    let text = document.createElement("textarea");
    let input = document.createElement("input");
    let br = document.createElement("br");

    form.classList.add("campo-msg");
    text.setAttribute("name", "message");
    text.setAttribute("rows", "3");
    text.setAttribute("cols", "78");
    input.setAttribute("type", "submit");
    input.setAttribute("value", "Enviar");

    input.addEventListener("click", ()=>{
        enviarMsg();
        event.preventDefault();
    });
    
    form.appendChild(text);
    form.appendChild(br);
    form.appendChild(input);

    conversa.appendChild(form);
}

function criarBotAddGroup(){
    let listaAmi = document.querySelector(".list-amig");

    let botao = document.createElement("button");
    let text = document.createTextNode("Novo Grupo");

    botao.classList.add("bot-novo-grupo");
    botao.appendChild(text);

    botao.addEventListener("click", ()=>{
        modalNovoGrupo();
    });

    listaAmi.appendChild(botao);
}

function removerAddGroupMsgGruposMsgs(){
    let botGrupo = document.querySelector(".bot-novo-grupo");
    let msg = document.querySelector(".campo-msg");
    let grupos = document.querySelector(".org-list-amig");
    let msgs = document.querySelector(".msgs-conv");
    let nomeGrupo = document.querySelector(".nome-conv");

    if (botGrupo.parentNode && msg.parentNode) {
        botGrupo.parentNode.removeChild(botGrupo);
        msg.parentNode.removeChild(msg);
        grupos.innerHTML = "";
        msgs.innerHTML = "";
        nomeGrupo.innerText = "";
    }
}

function modalLogin(){
    let modalCont = document.querySelector(".modal-container");
    let form = document.querySelector(".form-modal");

    form.innerHTML = "";

    let text = document.createTextNode("Fazer Login:");
    let br = document.createElement("br");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");

    input1.setAttribute("type", "text");
    input1.setAttribute("name", "Login");
    input1.setAttribute("value", "ID");
    
    input2.setAttribute("type", "submit");
    input2.setAttribute("value", "Logar");
    input2.addEventListener("click", ()=>{
        fazerLogin();
    });

    form.appendChild(text);
    form.appendChild(br);
    form.appendChild(input1);
    form.appendChild(input2);

    modalCont.classList.add("visivel");
}

function modalNovoGrupo(){
    let modalCont = document.querySelector(".modal-container");
    let form = document.querySelector(".form-modal");

    form.innerHTML = "";

    let text1 = document.createTextNode("Nome do grupo:");
    let text2 = document.createTextNode("ID do grupo:");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");

    input1.setAttribute("type", "text");
    input1.setAttribute("name", "nome");
    input1.setAttribute("value", "Nome do grupo");
    
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "id");
    input2.setAttribute("value", "iddogrupo");

    input3.setAttribute("type", "submit");
    input3.setAttribute("value", "Criar");
    input3.addEventListener("click", ()=>{
        event.preventDefault();
        criarNovoGrupo();
        let modalCont = document.querySelector(".modal-container");
        modalCont.classList.remove("visivel");
    });

    form.appendChild(text1);
    form.appendChild(br1);
    form.appendChild(input1);
    form.appendChild(br2);
    form.appendChild(text2);
    form.appendChild(br3);
    form.appendChild(input2);
    form.appendChild(br4);
    form.appendChild(input3);

    modalCont.classList.add("visivel");
}

function checkarLogin(){
    let botaoLogin = document.querySelector(".bot-entrar");

    if (localStorage.getItem("idUsuarioLogado") != null) {
        botaoLogin.innerText = "Logout";
        criarBotAddGroup();
        criarCampoMsg();
        getGrupos();
    }
}

let botaoLogin = document.querySelector(".bot-entrar");
botaoLogin.addEventListener("click", ()=>{
    if (botaoLogin.innerText == "Entrar") {
        modalLogin();
    } else {
        localStorage.removeItem("idUsuarioLogado");
        botaoLogin.innerText = "Entrar";
        removerAddGroupMsgGruposMsgs();
    }
});


let modalCont = document.querySelector(".modal-container");
window.addEventListener("click", ()=>{
    if (event.target == modalCont) {
        modalCont.classList.remove("visivel");
    }
});


function fazerLogin() {
    let input = document.querySelector(".form-modal > input");
    localStorage.setItem("idUsuarioLogado", input.value);
    checkarLogin();
}


function criarNovoGrupo(){
    let inputs = document.querySelectorAll(".form-modal > input");
    let nome = inputs[0].value;
    let id = inputs[1].value;
    let xhttp = new XMLHttpRequest();
    let urlGrupos = url + "grupos";
    let obj = {groupName: nome, groupID:id};

    xhttp.open('POST', urlGrupos, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.send(JSON.stringify(obj));

    umAmigo(nome, id);
}

function enviarMsg(){
    let txtMsg = document.querySelector(".campo-msg > textarea");
    let id = localStorage.getItem("idUsuarioLogado");
    if(idConvAtual != ""){
        let msg = {userName: id, message: txtMsg.value};
        let msgUrl = url + idConvAtual;
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", msgUrl, true);
        xhttp.setRequestHeader("Content-type", "application/json");

        xhttp.send(JSON.stringify(msg));
    }
    
    carregarUmaConv(id, txtMsg.value);
    txtMsg.value = "";
}





var idConvAtual = "";

checkarLogin();
if (localStorage.getItem("idUsuarioLogado") == null) {
    alert("Faça login para ter acesso às mensagens.");
}