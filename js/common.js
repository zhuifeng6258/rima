"use strict";	//使用严格模式

//下面是更简洁的封装，来自vue源码
var _toString = Object.prototype.toString;
function toRawType (value) {return _toString.call(value).slice(8, -1)}

//对象真值判断
function judgeObject(obj){
	let result = true;
	switch(typeof(obj)){
		case "undefined":
			result = false
			break;
		case "boolean":
			result = obj;
			break;
		case "string":
			if(obj.trim() === ""){
				result = false;
			}
			break;
		case "number":
			if(obj === 0){
				result = false;
			}
			if(isNaN(obj)){
				result = false;
			}
			break;
		case "object":
			if(obj === null){
				result = false;
			}
			switch(toRawType(obj)){
				case "Object":
					break;
				case "Array":
					if(obj.length == 0){
						result = false;
					}
					break;
				default:
					;
			}
			break;
		case "function":
			break;
		default:
			;
	}
	return result;
}

//对象复制
function cloneObjectFn(obj){
    return JSON.parse(JSON.stringify(obj));
}
