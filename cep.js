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
    console.log(arr);
    document.getElementById("rua").value = arr.logradouro;
    document.getElementById("bairro").value = arr.bairro;
    document.getElementById("cidade").value = arr.localidade;
    document.getElementById("estado").value = arr.uf;
}

function verifica(){
    var lido = document.getElementById("cep").value;
    lido = lido.replace(/[^\d]+/g,'');
    var myCep = "http://viacep.com.br/ws/" + lido + "/json"
    buscaCep(myCep);
}