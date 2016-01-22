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
    parseQueryString: function (url) {
		var reg_url = /^[^\?]+\?([\w\W]+)$/,
			reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
			arr_url = reg_url.exec(url),
			ret = {};
		if (arr_url && arr_url[1]) {
		   	var str_para = arr_url[1], result;
			while ((result = reg_para.exec(str_para)) != null) {
				ret[result[1]] = result[2];
			}
		}
		return ret;
	}
};

