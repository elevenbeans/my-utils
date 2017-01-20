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
	        while(preIndex >= 0 && arr[preIndex] > current) {
	            arr[preIndex+1] = arr[preIndex];
	            preIndex--;
	        }
	        arr[preIndex+1] = current;
	    }
	    return arr;
		},
		shellSort: function(){

		},
		binarySearch: function(){

		}
	}

	window.Argrithm = argrithm;

})(window);
