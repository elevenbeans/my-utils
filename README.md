# Usefull Utils
## Usage
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

### PullToRefresh

```html
<div id = "ptr-instructions">
    <!--your loading icon here-->
    <span class= "ptr-instructions-text"></span>
</div>
<div id = "main">
    <div class = "item">1</div>
    <div class = "item">2</div>
    <div class = "item">3</div>
    <div class = "item">4</div>
    <div class = "item">5</div>
    <div class = "item">6</div>
    <div class = "item">7</div>
    <div class = "item">8</div>
    <div class = "item">9</div>
    <div class = "item">10</div>
    <div class = "item">11</div>
    <div class = "item">12</div>
    <div class = "item">13</div>
</div>
```
```js
pullToRefresh.init({
    // required
    ptrElement: '#ptr-instructions', // 'pull to refresh' intructions element
    ptrTextElement: '.ptr-instructions-text', // intructions' text element
    targetElement: '#main', // target element that will be dragged and refreshed
    // optional
    instructionsPullToRefresh: 'pull to refresh', // text
    instructionsReleaseToRefresh: 'Release to refresh', //text
    instructionsRefreshing: 'refreshing', // text
    threshold: 60, // minimum distance required to trigger the onPull callback
    onPull: function(){ // callback fn
        console.log('onPull fired');
    }
});

```
