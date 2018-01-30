(function(){

  var argrithm = {
    bubbleSort: function(arr){
      var temp;
      for(var i = 0; i < arr.length - 1; i++){
        for(var j = 1; j < arr.length - 2; j++){
          if(arr[j-1] > arr[j]){
            temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
          }
        }
      }
      return arr;
    },
    quickSort: function(arr){
      if(arr.length < 2) return arr;
      var middleIndex = Math.floor(arr.length / 2);
      var middleValue = arr.splice(middleIndex,1)[0];

      var left = [];
      var right = [];

      for(var i = 0; i < arr.length; i++){
        if(arr[i] < middleValue){
          left.push(arr[i]);
        }else{
          right.push(arr[i]);
        }
      }
      return this.quickSort(left).concat(middleValue,this.quickSort(right));
    },
    insertionSort(arr) {
      var len = arr.length;
      var preIndex, current;
      for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) { // 找位置
          arr[preIndex + 1] = arr[preIndex];
          preIndex--;
        }
        arr[preIndex + 1] = current; // 插入
      }
      return arr;
    },
    shellSort: function(arr) {
      var len = arr.length;
      for (var fraction = Math.floor(len / 2); fraction > 0;
        fraction = Math.floor(fraction / 2)) {
        for (var i = fraction; i < len; i++) {
          for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
            var temp = arr[j];
            arr[j] = arr[fraction + j];
            arr[fraction + j] = temp;
          }
        }
      }
      return arr;
    },
    selectionSort: function(arr){
      var minIndex, temp;
      for(var n = 0; n < arr.length - 1; n++) {
        minIndex = n;
        for(var i = n + 1; i < arr.length; i++ ) {
          if(arr[i] < arr[minIndex]) {
            minIndex = i;
          }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[n];
        arr[n] = temp;
      }
      return arr;
    },
    binarySearch(data, dest) {
      var h = data.length - 1;
      var l = 0;
      while(l <= h) {
        var m = Math.floor((h + l) / 2);
        if(data[m] == dest) {
          return m;
        }
        if(dest > data[m]) {
          l = m + 1;
        } else {
          h = m - 1;
        }
      }
      return false;
    },
    factorial(num){
      if(num == 0){
        return 1;
      }else if(num == 1){
        return 1;
      }else{
        return num * this.factorial(num-1);
      }
    },
    convertToRoman(aNumber) {
      if(aNumber < 1 || aNumber > 3999) {
        return false;
      }
      var aArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
      var rArray = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
      var rNumber = '';
      for(var i=0; i<aArray.length; i++) {
        while(aNumber >= aArray[i]) {
          rNumber += rArray[i];
          aNumber -= aArray[i];
        }
      }
      return rNumber;
    },
    uniteUnique() {
      var arr = [];
      //unite中参数总数目（即数组个数）
      var len = arguments.length;
      //控制遍历哪个数组（arguments[i],i可取0~len-1）
      var i = 0;
      while(i < len) {
        //控制遍历的数组arguments[i]中元素下标
        var j = 0;
        while(j < arguments[i].length) {
          //如果 arr 中没有索引为 i 的数组参数中的索引为 j 的元素
        //将其 push 到 arr 中
          if(arr.indexOf(arguments[i][j]) == -1)
            arr.push(arguments[i][j]);
          j++;
        }
        i++;
      }
      return arr;
    },
    flatten(arr) { //数组扁平化
      var self = this;
      arr = arr.reduce(function(acc, val){
        console.log(acc);
        return acc.concat(Array.isArray(val) ? self.flatten(val) : val);
      },[]);
      return arr;
    },
    spinalCase(str) { //
    // "It's such a fine line between stupid, and clever."
      str = str.replace(/_/g,' ')
        .replace(/([A-Z])/g,' $1')
        .replace(/^\s/,'')
        .replace(/\s+/g,'-')
        .toLowerCase();

      return str;
    },
    fibonacci(length){ // fibonacci 数列
      var arr = [1,1];
      for(var i = 0; i < length; i++ ){
        arr.push(arr[i]+arr[i+1]);
      }
      return arr;
    },
    sumFibs(max){ // fib 累加
      var arr = [1,1];
      var sum = 0;

      for(var i = 0; arr[arr.length-1] <= max; i++ ){
        sum = arr.reduce(function(a, b){
          return a + b;
        });
        arr.push(arr[i]+arr[i+1]);
      }
      arr.pop();
      return sum;
    },
    isPrimeNum(num){ // 质数
      for (var i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return true;
    },
    smallestCommons(a, b){ // 最小公倍数
      var minNum = Math.min(a,b),
        maxNum = Math.max(a,b),
        i = 1, vper = 0;
      if(a === 0 || b === 0){
        return maxNum;
      }
      for(;i <= maxNum;i++){
        vper = minNum * i;
        if(vper % maxNum === 0){
          return vper;
          break;
        }
      }

    },
    telephoneCheck(str) { // America tele
      // Good luck!
      var reg = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
      return reg.test(str);
    },
    sym() { // Symmetric Difference
      var argArr = [];
      for(var key in arguments){
        arguments[key] = arguments[key].sort();
        arguments[key] = [...new Set(arguments[key])];
        argArr.push(arguments[key]);

      }
      return argArr.reduce(function(pre, next){
        return add(pre, next);
      });

      function add(argFirst, argSecond){
        var total = argFirst.concat(argSecond);
        var same = argFirst.filter(function(item){
          return argSecond.indexOf(item) !== -1;
        });

        var res = total.filter(function(item){
          return same.indexOf(item) == -1;
        });
        return res;
      }
      return argArr;
    },
    charsMap(o){ // 全排列
      o = (o+'').replace(/(\w)(?=\w*\1)/g,'').replace(/\s+/g,''); //去除重复字符以及空白字符
      switch(o.length){
      case 0:
      case 1: return [o];
      default:
        var p = /^(\S+?)(\S)$/.exec(o), // 使用正则将字符串分割为n-1长度字符串，以及最后一个字符串。
          _r = charsMap(p[1]),
          l = p[2],
          r = [];
        for (var i = 0; i < _r.length; i++) {
          var t = _r[i];
          for (var j = 0, len = t.length; j <= len; j++) {
            r.push( t.replace( new RegExp('^(\\S{'+j+'})(\\S{'+(len-j)+'})$'), '$1'+l+'$2' ) );
            // 字符插入位置从开头前到结尾后,正则的作用相当于Array.splice(j,0,l); 在下标j的位置插入一个字符l
          }
        }
        return r;
      }
    }
  };
  window.Argrithm = argrithm;
})(window);
