# Usefull Utils
##Usage
**Firstly, add the code below to your HTML page (better in tag`<header>`):**

`<script src="your/path/Utils.js"></script>
`

**Then, create an Utils object `var objName = new className()` and you use the functions below.**

## Function

### dataUtils
+ unique

```js
var dataUt = new dataUtils();
var arr = [1,2,3,2,3,4,3,1,8,9];
console.log(dataUt.unique(arr)); // [1, 2, 3, 4, 8, 9]
	
```

+ parseQueryString 

```js
//github.com/elevenBeans?a=1&b=2&c=3&d=4
var result = dataUt.parseQueryString(window.location.href); 
console.log(result);// {a: "1", b: "2", c: "3", d: "4"}
```

+ getBase64Image
```js
    var imgUrl = "https://gw.alicdn.com/tps/TB1l6OIKXXXXXcWXFXXXXXXXXXX-34-18.png";
    dataUt.getBase64Image(
        imgUrl,
        function(res){
            console.log('res:::',res)
        }
    );
```

### domUtils
+ insertAfter

```js

var el = document.getElementById('div1');
var newEl = document.getElementById('div2');

var domUt =new domUtils();
domUt.insertAfter(newEl,el);
```

### BottomLoader
+ addCallback

```js
var bl = new BottomLoader(0); //0 throttle 1 debounce

bl.addCallback(function(arg){
	// code here
},{
	diff:300,
	immediately:true
});
```