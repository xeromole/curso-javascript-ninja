(function() {
  'use strict';

  
  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
    
  function app(){
    return {
      init : function init(){
       this.companyInfo();
       this.initEvent();
      },

      initEvent : function initEvent(){
        DOM("[data-js='form-submit']").on("submit",this.handleSubmit);
      },

      handleSubmit : function handleSubmit(event){
        event.preventDefault();
        var $tableCar =  DOM("[data-js='tableCar']").get()[0];
        $tableCar.appendChild(app().createNewCar());
      },
      createNewCar : function createNewCar(){
        var $fragment = document.createDocumentFragment();
        var $image = document.createElement("img");
        var $tr = document.createElement("tr");
        var $tdImage = document.createElement("td");
        var $tdMarca = document.createElement("td");
        var $tdAno = document.createElement("td");
        var $tdPlaca = document.createElement("td");
        var $tdCor = document.createElement("td");
        var $image = document.createElement("img");

        $tdImage.appendChild($image);
        $image.src = DOM("[data-js='url']").get()[0].value; 
        $tdMarca.textContent = DOM("[data-js='marca']").get()[0].value;
        $tdAno.textContent = DOM("[data-js='ano']").get()[0].value;
        $tdPlaca.textContent = DOM("[data-js='placa']").get()[0].value;
        $tdCor.textContent = DOM("[data-js='cor']").get()[0].value;

        $tr.appendChild($tdImage);
        $tr.appendChild($tdMarca);
        $tr.appendChild($tdAno);
        $tr.appendChild($tdPlaca);
        $tr.appendChild($tdCor);


        return $fragment.appendChild($tr);
      },

      companyInfo : function companyInfo(){
        var ajax = new XMLHttpRequest();
        ajax.open("GET","company.json",true);
        ajax.send();
        console.log("loading");
        ajax.addEventListener("readystatechange",this.getCompanyInfo,false);
      },
      getCompanyInfo : function getCompanyInfo(){
          if(!app().isReady.call(this))
            return
          var data = JSON.parse(this.responseText);
          var $companyName =  DOM("[data-js='name']");
          var $companyPhone = DOM("[data-js='tel']");

          $companyName.get()[0].textContent = data.name;
          $companyPhone.get()[0].textContent = data.phone;
        
        },
      isReady : function isReady(){
         return this.readyState === 4 && this.status === 200
      }
     

    }
  }

  app().init();




})();
