(function(win,DOM){
	"use strict"


	
	function DOM(element){
			if(!(this instanceof DOM))
				return new DOM(element);
			this.element = document.querySelectorAll(element);
			
		}

		DOM.prototype.get = function get(){
			if(this.element.lenght === 1){
				return this.element[1];
			}
			return this.element;
		};

		DOM.forEachPrototype  = function forEachPrototype(){
			return Array.prototype.forEach.apply(this.element,arguments);
		}

		DOM.mapProtoype = function mapProtoype(){
			return Array.prototype.map.apply(this.element,arguments)
		}
		DOM.filterPrototype  = function filterPrototype(){
			return array.prototype.filter.apply(this.element,arguments);
		}
		DOM.reducePrototype  = function reducePrototype(){
			return array.prototype.reduce.apply(this.element,arguments);
		}
		DOM.reduceRightPrototype  = function reduceRightPrototype(){
			return array.prototype.reduceRight.apply(this.element,arguments);
		}
		DOM.everyPrototype  = function everyPrototype(){
			return array.prototype.every.apply(this.element,arguments);
		}
		DOM.somePrototype  = function somePrototype(){
			return array.prototype.some.apply(this.element,arguments);
		}

		DOM.isArray = function isArray(asValue){
		return Object.prototype.toString.call(asValue) === "[object Array]";
		}
		DOM.isFunction = function isFunction(asValue){
		return Object.prototype.toString.call(asValue) === "[object Function]";
		}
		DOM.isNumber = function isNumber(asValue){
			return Object.prototype.toString.call(asValue) === "[object Number]";
		}

		DOM.isString = function isString(asValue){
			return Object.prototype.toString.call(asValue) === "[object String]";
		}
		DOM.isBoolean = function isBoolean(asValue){
			return Object.prototype.toString.call(asValue) === "[object Boolean]";
		}
		DOM.isNull = function isNull(asValue){
			return Object.prototype.toString.call(asValue) === "[object Null]" || 
			Object.prototype.toString.call(asValue) === "[object Undefined]";
		}

		DOM.prototype.on = function on(event,callback){

			this.element.forEach(function(item){
				item.addEventListener(event,callback,false);
			});
			
		};
		DOM.prototype.off = function off(event,callback){
			this.element.forEach(function(item){
				item.removeEventListener(event,callback,false);
			});

		};
		

	
		win.DOM = DOM;
		

})(window,document);
