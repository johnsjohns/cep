var espera;
var textoEspera = "";
function buscaCep(cep){
    var request = new XMLHttpRequest();
    request.onreadystatechange =  function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            mostrar(myArr);
            
        }
    };
    request.open('GET', cep);
    request.send();    
  
}

function mostrar(arr){
    clearInterval(espera);
    if(arr.erro != true){
        habilitar();
        document.getElementById("rua").value = arr.logradouro;
        document.getElementById("bairro").value = arr.bairro;
        document.getElementById("cidade").value = arr.localidade;
        document.getElementById("estado").value = arr.uf;
    } else {
        limpar();
    }

}

function verifica(){
    var lido = document.getElementById("cep").value;
    var novoReg = new RegExp(/[\d]{5}-[\d]{3}/);
    if(novoReg.test(lido)){
        lido = lido.replace(/[^\d]+/g,'');
        desabilitar
        limpar();
        espera = setInterval(esperar, 20);
        var myCep = "http://viacep.com.br/ws/" + lido + "/json"
        buscaCep(myCep);
    } else {
        limpar();
    }
}

function esperar(){
    textoEspera += ".";
    document.getElementById("rua").value = textoEspera;
    document.getElementById("bairro").value = textoEspera;
    document.getElementById("cidade").value = textoEspera;
    document.getElementById("estado").value = textoEspera;
    if(textoEspera.length > 30){
        textoEspera = "";
    }
}

function limpar(){
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}

function desabilitar(){
    document.getElementById("rua").disabled = true;
    document.getElementById("bairro").disabled = true;
    document.getElementById("cidade").disabled = true;
    document.getElementById("estado").disabled = true;
}

function habilitar(){
    document.getElementById("rua").disabled = false;
    document.getElementById("bairro").disabled = false;
    document.getElementById("cidade").disabled = false;
    document.getElementById("estado").disabled = false;
}
