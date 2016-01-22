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
				console.log(result);
				ret[result[1]] = result[2];
			}
		}
		console.log(ret);
		return ret;
	},
	insertAfter : function (draggedElement, targetElement){
		var parent = targetElement.parentNode;
		if (parent.lastChild == targetElement) {
		// 如果最后的节点是目标元素，则直接添加。因为默认是最后
			parent.appendChild(draggedElement);
		}
		else {
			parent.insertBefore(draggedElement, targetElement.nextSibling);
			//如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
		}
	}
};

