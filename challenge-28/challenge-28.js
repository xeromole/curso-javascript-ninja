  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */


  (function(win,doc){
  	var $input = doc.querySelector("[data-js='text']");
  	var $buttonSend = doc.querySelector("[data-js='btn-send']");
  	var $receiveDiv = doc.querySelector(".receive");
  	var valueNumber;
  	var $logradouro = doc.querySelector("[data-js='logradouro']");
  	var $bairro = doc.querySelector("[data-js='bairro']");
  	var $cidade = doc.querySelector("[data-js='cidade']");
  	var $estado = doc.querySelector("[data-js='estado']");
  	var $cep = doc.querySelector("[data-js='cep']");
  	var $status = doc.querySelector("[data-js='status']");

  	$buttonSend.addEventListener("click",handleClickSend,false);

  	function handleClickSend(e){
  		e.preventDefault();
  		valueNumber = $input.value.match(/(\d)+/g).join("");
  		ajaxRequest();
  	}


  	function ajaxRequest(){
  		var dataResult;
	  	connect();

  	}
  	
  	function errorConversor(){
  		try{
  			converted = JSON.parse(ajax.responseText);
  		}catch(e){
  			return converted.responseText = null;
  		}
  	}
  	function connect(){
  		ajax = new XMLHttpRequest();
  		ajax.open("GET",replaceCep("https://viacep.com.br/ws/[CEP]/json/"));
  		ajax.send();
  		status("loading");
  		ajax.addEventListener("readystatechange",dataJson,false);
  	}

  	function dataJson(){
  		if(ajax.status === 200 && ajax.readyState === 4){
  			dataResult = resultParse();
  			writeValue();
  			status("ok");
  		}else{
  			console.log("erro");
  		}
  	}

  	function resultParse(){
  		var result;
  		try{
  			result = JSON.parse(ajax.responseText);
  		}catch(e){
  			result = null;
  		}
  		return result;
  	}

  	function writeValue(){
  		$logradouro.innerHTML = dataResult.logradouro;
  		$bairro.innerHTML = dataResult.bairro;
  		$cidade.innerHTML = dataResult.localidade;
  		$estado.innerHTML = dataResult.uf;
  		$cep.innerHTML = dataResult.cep;
  		status("ok");
  	}

  		function status(type){
  		var message = {
  			loading: replaceCep("Buscando informações para o CEP [CEP]..."),
  			ok: replaceCep("Endereço referente ao CEP [CEP]"),
  			error: replaceCep("Não escontramos endereço para o cep [CEP]")
  		};
  			return $status.innerHTML = message[type];
  	}

  		function replaceCep(string){
  		return string.replace('[CEP]',valueNumber);
  	}





  })(window,document)