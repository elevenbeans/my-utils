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
		quickSort: function(arr) {
        //如果数组<=1,则直接返回
        if(arr.length<=1){return arr;}
        var pivotIndex=Math.floor(arr.length/2);
        //找基准，并把基准从原数组删除
        var pivot=arr.splice(pivotIndex,1)[0];
        //定义左右数组
        var left=[];
        var right=[];

        //比基准小的放在left，比基准大的放在right
        for(var i=0;i<arr.length;i++){
            if(arr[i]<=pivot){
                left.push(arr[i]);
            }
            else{
                right.push(arr[i]);
            }
        }
        //递归
        return this.quickSort(left).concat([pivot],this.quickSort(right));
    },
		insertionSort: function(){

		},
		shellSort: function(){

		},
		binarySearch: function(){

		}
	}

	window.Argrithm = argrithm;

})(window);
