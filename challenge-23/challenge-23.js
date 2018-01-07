/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

	
		var $inputText = document.querySelector("[data-js='inputText']");
		var $button = document.querySelectorAll("[data-js='button']");
		var $clear = document.querySelector("[data-js='clear']");
		var $operation = document.querySelectorAll("[data-js='operation']");
		var $result = document.querySelector("[data-js='result']");
		var operations = ["-","+","%","*"];
		$inputText.value = 0;

		
		function captureKey(key){
		Array.prototype.forEach.call(key,function(button){
			button.addEventListener("click",function(event){
				$inputText.value += this.innerHTML;
			},false)
		});
		}
		Array.prototype.forEach.call($operation,function(operation){
			operation.addEventListener("click",function(){
				funtionRemoveCharacter($inputText);
				$inputText.value += this.innerHTML;
			},false);
		},false);

		$clear.addEventListener("click",function(event){
			$inputText.value = 0;
		},false);

		$result.addEventListener("click",result,false);

		
		

		

		captureKey($button);

		function verCharacter(){
			values = $inputText.value.charAt($inputText.value.length-1);
			 return operations.some(function(item){
				return item === values;
			});
			 
		}
		function funtionRemoveCharacter(valorAVerificar){
			if(verCharacter()){
				$inputText.value = valorAVerificar.value.slice(0,-1);
			}
		}

		function result(){
			var arrayList = [];
			arrayList = $inputText.value.match(/(?:\d+)([+*%-])?/g);
			console.log(arrayList);
			var resultFinal = arrayList.reduce(function(acumulado,atual){
				var firstValue = acumulado.slice(0,-1);

				var verOperation = acumulado.split("").pop();
				switch(verOperation){
					case "+" : return Number(firstValue) + Number(atual);
					case "-" : return Number(firstValue) - Number(atual);
					case "*" : return Number(firstValue) * Number(atual);
					case "%" : return Number(firstValue) / Number(atual);

				}
				
			});
			$inputText.value = resultFinal;
		}



		







		
		

	










