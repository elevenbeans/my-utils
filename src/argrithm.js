;(function(){

	var argrithm = {
		bubbleSort: function(arr) {
			//var res = [];
			for(var i = 0; i < arr.length - 1; i++) {
				//if(i = 0) res.push(arr[0]);
				for(var j = 1; j < arr.length - 2; j++) {
					if(arr[j-1] > arr[j]) {
						// var temp;
						temp = arr[j];
						arr[j] = arr[j-1];
						arr[j-1] = temp;
					}
				}
			}
			return arr;
		},
		quickSort: function(){

		},
		insertionSort: function(){

		},
		shellSort: function(){

		},
		binarySearch: function(){

		}
	}

	window.argrithm = argrithm;

})(window);
