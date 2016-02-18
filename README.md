# Usefull Utils
##Usage
**Firstly, add the code below to your HTML page (better in tag`<header>`):**

`<script src="your/path/Utils.js"></script>
`

**Then, create an Utils object `var objName = new className()` and set the function below.**

## Function

### dataUtils
+ unique

```js
var dateUt = new dataUtils();
var arr = [1,2,3,2,3,4,3,1,8,9];
console.log(dateUt.unique(arr)); // [1, 2, 3, 4, 8, 9]
	
```

+ parseQueryString 

```js
//github.com/elevenBeans?a=1&b=2&c=3&d=4
var result = dateUt.parseQueryString(window.location.href); 
console.log(result);// {a: "1", b: "2", c: "3", d: "4"}
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
var bl = new BottomLoader();

bl.addCallback(function(arg){
	// code here
},{
	diff:300,
	immediately:true
});
```