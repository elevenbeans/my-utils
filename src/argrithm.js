;(function(){

	var argrithm = {
		bubbleSort: function(arr){
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
	        for (var j = i - fraction; j >= 0 && 
	        		arr[j] > arr[fraction + j]; j -= fraction) {
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
			for(var n = 0; n < arr.length - 1; n++){
				minIndex = n;
				for(var i = n + 1; i < arr.length; i++ ){
				  if(arr[i] < arr[minIndex]){
					  minIndex = i;
				  }
			  };

				temp = arr[minIndex];
				arr[minIndex] = arr[n];
				arr[n] = temp;
			}
			return arr;
		},
		binarySearch(data, dest){
		  var h = data.length - 1,
		      l = 0;
		  while(l <= h){
		    var m = Math.floor((h + l) / 2);
	      if(data[m] == dest){
          return m;
        }
	      if(dest > data[m]){
          l = m + 1;
        }else{
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
		}
	}

	window.Argrithm = argrithm;

})(window);
