function TINT () {
  var logObject = { cssString: '', stringToLog: '' };
  
  Object.defineProperty(logObject, 'green', {
    get: function() {
      logObject.cssString += 'color:green;';
      return logObject;
    }
  });
  
  Object.defineProperty(logObject, 'blue', {
    get: function() {
      logObject.cssString += 'color:blue;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'red', {
    get: function() {
      logObject.cssString += 'color:red;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'magenta', {
    get: function() {
      logObject.cssString += 'color:magenta;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'cyan', {
    get: function() {
      logObject.cssString += 'color:#1DCFCF;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'orange', {
    get: function() {
      logObject.cssString += 'color:orange;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'purple', {
    get: function() {
      logObject.cssString += 'color:#BB72E7;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'pink', {
    get: function() {
      logObject.cssString += 'color:#F273F6;';
      return logObject;
    }
  });

  //
  Object.defineProperty(logObject, 'bgGreen', {
    get: function() {
      logObject.cssString += 'background:green;';
      return logObject;
    }
  });
  
  Object.defineProperty(logObject, 'bgBlue', {
    get: function() {
      logObject.cssString += 'background:blue;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgRed', {
    get: function() {
      logObject.cssString += 'background:red;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgMagenta', {
    get: function() {
      logObject.cssString += 'background:magenta;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgCyan', {
    get: function() {
      logObject.cssString += 'background:#1DCFCF;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgOrange', {
    get: function() {
      logObject.cssString += 'background:orange;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgPurple', {
    get: function() {
      logObject.cssString += 'background:#BB72E7;';
      return logObject;
    }
  });

  Object.defineProperty(logObject, 'bgPink', {
    get: function() {
      logObject.cssString += 'background:#F273F6;';
      return logObject;
    }
  });
  ///

  Object.defineProperty(logObject, 'bold', {
    get: function() {
      logObject.cssString += 'font-weight:bold;';
      return logObject;
    }
  });
  
  
  Object.defineProperty(logObject, 'xl', {
    get: function() {
      logObject.cssString += 'font-size:14pt;';
      return logObject;
    }
  });
  
  Object.defineProperty(logObject, 'custom', {
    get: function() {
      return function(styleObj) {
        for (var key in styleObj) {
          logObject.cssString += key + ':' + styleObj[key] + ';';
        }
        return logObject;
      };
    }
  });
  
  Object.defineProperty(logObject, 'log', {
    get: function() {
      return function(string) {
        logObject.stringToLog = string;
        console.log('%c' + logObject.stringToLog, logObject.cssString);
        logObject.cssString = '';
        logObject.stringToLog = '';
      };
    }
  });
  
  return logObject;
}

var Tint = new TINT();

// Tint.green.bold.log('Bold and green text here');








