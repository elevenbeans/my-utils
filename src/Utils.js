var Utils = {
	init : function(){
		console.log('init');
	},
	// unique Arry
	unique : function(arr){
	    var result = [], hash = {};
	    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	        if (!hash[elem]) {
	            result.push(elem);
	            hash[elem] = true;
	        }
	    }
	    return result;
	},
};

