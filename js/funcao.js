function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro.toUpperCase());
    document.getElementById('bairro').value=(conteudo.bairro.toUpperCase());
    document.getElementById('cidade').value=(conteudo.localidade.toUpperCase());
   
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};
function mascara_cpf(objeto){
    if(objeto.value.length == 3){
        objeto.value = objeto.value + '.'
    }
    if(objeto.value.length == 7){
        objeto.value = objeto.value + '.'
    }
    if(objeto.value.length == 11){
        objeto.value = objeto.value + '-'
    }
}
function mascara_cartao(objeto){
    if(objeto.value.length == 4){
        objeto.value = objeto.value + '.'
    }
    if(objeto.value.length == 9){
        objeto.value = objeto.value + '.'
    }
    if(objeto.value.length == 14){
        objeto.value = objeto.value + '.'
    }
}
function mascara_validade(objeto){
    if(objeto.value.length == 2){
        objeto.value = objeto.value + '/'
    }

}
function somente_numero(e){
    tecla = (window.Event) ? e.which : e.keyCode;
    if (tecla > 47 && tecla < 58){
        return true;
    }
    else{
        if (tecla > 95 && tecla < 106){
            return true;
        }
        else{
            if (tecla == 8 || tecla == 46 || tecla == 37 || tecla == 39) {
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function maiusculo(){
    nomemaior = document.getElementById("nome").value.toUpperCase();
    document.getElementById("nome").value = nomemaior;
}

function resp(){
    nome = document.getElementById("nome").value.toUpperCase();
    alert("Sr(a) " + nome +", seus dados foram enviados com sucesso, nossa equipe entrara em contato.");
}



