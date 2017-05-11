var colors;
var helperFuncs = {};
var tint = {};

tint.log = function(string, options) {
	var options = options || {};
	if (!options['background']) options['background'] = 'white';
	if (!options['font-size']) options['font-size'] = '8pt';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

tint.bold = function(string, options) {
	var options = options || {};
	options['font-weight'] = 'bold';
	if (!options['background']) options['background'] = 'white';
	if (!options['font-size']) options['font-size'] = '8pt';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

tint.lg = function(string, options) {
	var options = options || {};
	options['font-size'] = '10pt';
	if (!options['background']) options['background'] = 'white';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

tint.xs = function(string, options) {
	var options = options || {};
	options['font-size'] = '4pt';
	if (!options['background']) options['background'] = 'white';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

tint.sm = function(string, options) {
	var options = options || {};
	options['font-size'] = '6pt';
	if (!options['background']) options['background'] = 'white';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

tint.xl = function(string, options) {
	var options = options || {};
	options['font-size'] = '12pt';
	if (!options['background']) options['background'] = 'white';
	if (!options['color']) options['color'] = 'black';
	var cssString = helperFuncs.cssToString(options);
	console.log('%c' + string, cssString);
};

// set all default color / bgColor properties
helperFuncs.cssToString = function(cssObj) {
	var cssString = '';
	for (prop in cssObj) {
		cssString += prop + ':' + cssObj[prop] + ';'
	};
	return cssString;
};

helperFuncs.setColorFunc = function(colorName, colorCode) {
	tint[colorName] = function(string, options) {
		var options = options || {};
		if (!options['background']) options['background'] = 'white';
		if (!options['font-size']) options['font-size'] = '8pt';
		options.color = colorCode;
		var cssString = helperFuncs.cssToString(options);
		console.log('%c' + string, cssString);	
	};
};

helperFuncs.setBgColorFunc = function(colorName, colorCode) {
	name = 'bg' + colorName[0].toUpperCase() + colorName.substring(1);
	tint[name] = function(string, options) {
		var options = options || {};
		if (!options['font-size']) options['font-size'] = '8pt';
		if (!options['color']) options['color'] = helperFuncs.getTextColor(colorCode);
		options.background = colorCode;
		var cssString = helperFuncs.cssToString(options);
		console.log('%c' + string, cssString);	
	};
};

helperFuncs.getTextColor = function(colorHex) {
	var c = colorHex.substring(1);      // strip #
	var rgb = parseInt(c, 16);   // convert rrggbb to decimal
	var r = (rgb >> 16) & 0xff;  // extract red
	var g = (rgb >>  8) & 0xff;  // extract green
	var b = (rgb >>  0) & 0xff;  // extract blue
	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	var textColor = '#404040'; // dark grey
	if (luma < 40) textColor = '#BDBABA'; // light grey
	return textColor;
};

// window.onload = function() {
// 	for (var color in colors) {
// 		helperFuncs.setColorFunc(color, colors[color]);
// 		helperFuncs.setBgColorFunc(color, colors[color]);
// 	};
// };

runIt = function() {
  console.log('ran')
  for (var color in colors) {
    helperFuncs.setColorFunc(color, colors[color]);
    helperFuncs.setBgColorFunc(color, colors[color]);
  };
};

runIt();

// end setting default colors / bgColors

colors = {
  "blue": "#0000ff",
  "brown": "#a52a2a",
  "cyan": "#00FFFF",
  "gray": "#808080",
  "grey": "#808080",
  "green": "#008000",
  "magenta": "#ff00ff",
  "orange": "#ffa500",
  "purple": "#800080",
  "red": "#ff0000"
};







