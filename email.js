/* Mensagem de envio do formulário -------------------------------------------------------------------------------------------------------------------------*/
function Enviar() {

  // obtém o elemento do HTML com o id "nomeid" e atribui à variável "nome"
  var nome = document.getElementById("nomeid"); 
  
  // se o valor do campo "nome" não for vazio, executa o bloco de código abaixo
  if (nome.value != "") { 
    
    // exibe um alerta com a mensagem concatenada com o valor digitado no campo "nome"
      alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
  }
}


/* Cria a função para alterar o fundo da página ------------------------------------------------------------------------------------------------------------*/
function definirCorDeFundo() {

  // obtém o valor do campo com id "cor-de-fundo" e atribui à variável "corDeFundo"
  var corDeFundo = document.getElementById("cor-de-fundo").value; 

  // define a cor de fundo do body com o valor da variável "corDeFundo"
  document.body.style.backgroundColor = corDeFundo; 
}
