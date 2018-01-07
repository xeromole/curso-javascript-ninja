/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
*/
function DOM(element){
	this.element = document.querySelectorAll(element);
	}

	DOM.prototype.on = function on(event,callback){

		this.element.forEach(function(item){
			item.addEventListener(event,callback,false);
		});
		
	};
	DOM.prototype.off = function(event,callback){
		this.element.forEach(function(item){
			item.removeEventListener(event,callback,false);
		});

	};
	DOM.prototype.get = function(){
		return this.element;
	};

	DOM.prototype.forEachPrototype  = function forEachPrototype(){
		return Array.prototype.forEach.apply(this.element,arguments);
	}

	DOM.prototype.mapProtoype = function mapProtoype(){
		return Array.prototype.map.apply(this.element,arguments)
	}
	DOM.prototype.filterPrototype  = function(){
		return array.prototype.filter.apply(this.element,arguments);
	}
	DOM.prototype.filterPrototype  = function(){
		return array.prototype.reduce.apply(this.element,arguments);
	}
	DOM.prototype.filterPrototype  = function(){
		return array.prototype.reduceRight.apply(this.element,arguments);
	}
	DOM.prototype.filterPrototype  = function(){
		return array.prototype.every.apply(this.element,arguments);
	}
	DOM.prototype.filterPrototype  = function(){
		return array.prototype.some.apply(this.element,arguments);
	}

	var $a = new DOM("[data-js='link']");
	$a.forEachPrototype(function(item){
		console.log(item);
	});
	var array = [];
	array = $a.mapProtoype(function(item){
		return item.getAttribute("data-js");
	});
	console.log(array);


/*


Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

	DOM.prototype.isArray = function isArray(asValue){
		return Object.prototype.toString.call(asValue) === "[object Array]";
	}
	DOM.prototype.isFunction = function isFunction(asValue){
		return Object.prototype.toString.call(asValue) === "[object Function]";
	}
	DOM.prototype.isNumber = function isNumber(asValue){
		return Object.prototype.toString.call(asValue) === "[object Number]";
	}

	DOM.prototype.isString = function isString(asValue){
		return Object.prototype.toString.call(asValue) === "[object String]";
	}
	DOM.prototype.isBoolean = function isBoolean(asValue){
		return Object.prototype.toString.call(asValue) === "[object Boolean]";
	}
	DOM.prototype.isNull = function isNull(asValue){
		return Object.prototype.toString.call(asValue) === "[object Null]" || 
		Object.prototype.toString.call(asValue) === "[object Undefined]";
	}

	
	console.log($a.isArray([1,2,3]));
	console.log($a.isFunction(function(){}));
	console.log($a.isNumber(1));
	console.log($a.isString(""));
	console.log($a.isBoolean(true));
	console.log($a.isNull());

