(function(root , factory){
     // AMD Module
	if(typeof define === 'function' && define.amd){
		define(function(){
			return root.its = factory();
		});
	}else if(typeof exports === 'object'){
		//NodeJS
		module.exports = factory();
	}else{   
		// Browsers
		root.its = factory();
	}


}(this, function(){
function _deep_clone(orig, copy){
		Object.keys(orig).forEach(function(propKey){
			var _desc = Object.getOwnPropertyDescriptor(orig, propKey);
			Object.defineProperty(copy ,  propKey , _desc);
		});
		return copy;
	};
	var _clone = function(orig){
		var copy =  Object.create(Object.getPrototypeOf(orig));
		return _deep_clone(orig , copy);
	};

    var gaia = {}
    gaia.clone = _clone;

	return gaia;
}));
