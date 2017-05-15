function TINT () {

  var logObj = { cssString: 'padding: 1px 2px;' };

  var tintObj = function (stringToLog) {
    console.log('%c' + stringToLog, logObj.cssString);
    logObj.cssString = 'padding: 1px 2px;';
  };

  var funcsObj = {};

  funcsObj.setProperty = function (prop, cssString) {
    Object.defineProperty(tintObj, prop, {
      get: function() {
        logObj.cssString += cssString;
        return tintObj;
      }
    });
  };

  funcsObj.setAllProperties = function () {
    for (var prop in propertiesHash) {
      funcsObj.setProperty(prop, propertiesHash[prop]);
    };
  };

  funcsObj.styleObjToString = function (styleObj) {
    var cssString = '';
    for (var key in styleObj) {
      cssString += key + ': ' + styleObj[key] + ';';
    };
    return cssString;
  };

  // remove text color from bg* property
  funcsObj.removeBgTextColor = function(cssString) {
    var startIdx = cssString.indexOf('color:');
    var endIdx = cssString.indexOf(';', startIdx) + 1;
    var removeString = cssString.substring(startIdx, endIdx);
    cssString.replace(removeString, '');
    if (cssString[cssString.length - 1] == '') cssString = cssString.slice(0, -1);
    return cssString;
  };

  var propertiesHash = {
    green: 'color: green;',
    blue: 'color: blue;',
    red: 'color: red;',
    magenta: 'color: magenta;',
    cyan: 'color: #1DCFCF;',
    orange: 'color: orange;',
    purple: 'color: #BB72E7;',
    pink: 'color: #F273F6;',
    bgGreen: 'background: green; color: white;',
    bgBlue: 'background: blue; color: white;',
    bgRed: 'background: red; color: white;',
    bgMagenta: 'background: magenta; color: white;',
    bgCyan: 'background: #1DCFCF;',
    bgOrange: 'background: orange;',
    bgPurple: 'background: #BB72E7; color: white;',
    bgPink: 'background: #F273F6; color: white;',
    bold: 'font-weight: bold;',
    xs: 'font-size: 5pt;',
    sm: 'font-size: 6pt;',
    md: 'font-size: 8pt;',
    lg: 'font-size: 11pt;',
    xl: 'font-size: 14pt;',
    bold: 'font-weight: bold;',
    underline: 'text-decoration: underline;',
    highlight: 'background: yellow; padding: 2px 4px;'
  };

  funcsObj.setAllProperties();
  
  Object.defineProperty(tintObj, 'log', {
    get: function() {
      return function(string, styleObj) {
        logObj.stringToLog = string;
        if (styleObj) logObj.cssString += funcsObj.styleObjToString(styleObj);
        console.log('%c' + logObj.stringToLog, logObj.cssString);
        logObj.cssString = 'padding: 1px 3px;';
        logObj.stringToLog = '';
      };
    }
  });
  
  return tintObj;
};

var Tint = new TINT();








