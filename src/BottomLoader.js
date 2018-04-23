/**
	BottomLoader
**/

function BottomLoader(isDebounce){
  this.BUFF = 200;
  this.viewportHeight = window.screen.height;
  this.DIFF = this.viewportHeight;
  this.cbContent = {};
  this.count = 1;
  this.last = 0;
  this.init(isDebounce);
}

BottomLoader.prototype = {
  init: function (isDeb) { //对于detect检测做了间隔BUFF限制 并绑定scroll事件
    var self = this;
    var timer = null;
    window.addEventListener('scroll', function () {
      if(isDeb){
        if (typeof timer === 'number') {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          //添加onscroll事件处理
          self.detect();
        }, self.BUFF);
      }else{
        self.throttle(200,self.detect);
      }
    }, false);
  },
  detect: function () {  //监测的逻辑
    var self = this;
    var docHeight = document.body.clientHeight;
    var scrollTop = window.pageYOffset  //用于FF
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
    // console.log('detect');
    var elBottomPos = docHeight;
    if ((self.viewportHeight + scrollTop + this.cbContent.diff >= elBottomPos )
      &&(scrollTop + this.cbContent.diff <= elBottomPos )) {
      this.cbContent.callback && this.cbContent.callback(self.count);
      // console.log('Loader '+self.count+' times');
      self.count ++;
    }
  },
  addCallback: function (callback,config) {  //增加回调函数
    var self = this;
    this.cbContent = {
      diff: config.diff || self.DIFF,
      callback: callback
    };
    if(config.immediately) {
      self.detect();
    }
  },
  throttle : function(delay, action){
    var self = this;
    var curr = +new Date();
    if (curr - self.last > delay){
      // console.log('in');
      action.apply(this, arguments);
      self.last = curr ;
    }
  }
};
