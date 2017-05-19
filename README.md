# **Tint**
Colors and Styling for your console.logs in the browser.


##### Include:

```javascript
<script src="/...path-to.../tint-logger/dist/tint.js"></script>
```

or

```javascript
<script src="/...path-to.../tint-logger/dist/tint.min.js"></script>
```


##### How to use:
Chain style properties and a string into the last property to log it out with style.

```javascript
Tint.green('green text'); // => logs green text
Tint.bgBlue('blue background'); // => logs text with blue background
Tint.xl.bold.blue.bgPink('green text'); // => logs green extra-large, bold, blue text with pink background
```

Different Options:   
`.green`  
`.blue`  
`.red`  
`.magenta`  
`.cyan`  
`.orange`  
`.purple`  
`.pink`  
`.bgGreen`  
`.bgBlue`  
`.bgRed`  
`.bgMagenta`  
`.bgCyan`  
`.bgOrange`  
`.bgPurple`  
`.bgPink`  
`.highligh`  
`.underline`  
`.bold`  
`.xs`  
`.sm`  
`.ms`  
`.lg`  
`.xl`  
