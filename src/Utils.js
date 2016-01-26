/**
	** Usefull functions in work
	** elevenBeans
**/


/**
 usefull function on data processing
**/

function dataUtils (){
};

dataUtils.prototype = {
	// body...

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
	// prase || param String
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
	}
};

/**
 usefull function on dom processing
**/

function domUtils (){
};

domUtils.prototype = {
	// insert tarDom after desDom
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

/**
	BottomLoader
**/

function BottomLoader(){
	this.BUFF = 400;
	this.viewportHeight = window.screen.height;
	this.DIFF = this.viewportHeight;
	this.cbContent = {};
	this.count = 1;
	
	this.init();
}

BottomLoader.prototype = {
  init: function () { //对于detect检测做了间隔BUFF限制 并绑定scroll事件
    var self = this;

    var timer = null;
    window.addEventListener('scroll', function () {
        if (typeof timer === 'number') {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            //添加onscroll事件处理
            self.detect();
        }, self.BUFF);
    }, false);
  },
  detect: function () {  //监测的逻辑
  	var self = this;
    var docHeight = document.body.clientHeight;
    var scrollTop = document.body.scrollTop; //scroll distance
    console.log('detect');
    var elBottomPos = docHeight;

    console.log(self.viewportHeight,scrollTop,cbContent.diff,elBottomPos)

    if ((self.viewportHeight + scrollTop + cbContent.diff >= elBottomPos )&&(scrollTop + cbContent.diff <= elBottomPos )){
      cbContent.callback && cbContent.callback(self.count);
      console.log('Loader '+self.count+" times");
      self.count ++;
    }
  },
  addCallback: function (callback,config) {  //增加回调函数
    var self = this;
    cbContent = {
      diff: config.diff || self.DIFF,
      callback: callback
    };
    if(config.immediately){
      self.detect();
    }
  }
};

