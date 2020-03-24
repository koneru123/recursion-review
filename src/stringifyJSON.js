// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // strings,numbers, arrays, obj, null, undefined,functions

  var resultStr = "";

  if ( typeof obj === "string" ) {
    return `"${obj}"`;
  }
  if ( obj === null ) {
    return 'null' ;
  }
  if ( typeof obj === 'function') {
    return null;
  }
  if( typeof obj === 'number'|| typeof obj === 'boolean' ) {
    return resultStr + obj ;
  }
  if( Array.isArray(obj) ) {
    var newArr = [];
    for(var i = 0; i < obj.length; i++) {
      newArr.push(stringifyJSON(obj[i]));
    }
    return "[" + newArr + "]";
  }
  if (typeof obj === 'object') {
    let emptyObjArr = [];
    for (let [key, value] of Object.entries(obj)) {
      if (value !== undefined && typeof value !== 'function') {
        emptyObjArr.push(`${stringifyJSON(key)}:${stringifyJSON(value)}`);
      }
    }
    return '{' + emptyObjArr + '}';
  }
   /*  var keys = Object.keys(obj);
    var count = keys.length;

    for( var key in obj ) {
      debugger;
      if( typeof obj[key] === undefined || typeof obj[key] === 'function') {
       count -= 1
      } else if (count > 1 ){
        resultStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        count -= 1
      } else { resultStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key])}
    }
    return '{' + resultStr + '}'; */

};

 /* for (var [key, value] of Object.entries(obj) ) {
        resultStr += stringifyJSON(key) ':' stringifyJSON(value) + ',';
    } */

/* else if( Array.isArray(obj) ) {
  if ( obj.length === 0 ) {
    return '[]';
  } else {
    //var newArr = [];
    for ( var i = 0; i < obj.length; i++) {
      resultStr +=  stringifyJSON(obj[i]);
      //newArr.push(stringifyJSON(obj[i]));
    }
  }
  return '[' + resultStr + ']' ;
} else if ( typeof obj === "object" ) {
  if(!obj.hasOwnProperty[key]) {
    return '{}';
  }

  for (var [key, Value] of Object.entries(obj) ) {
      resultStr += stringifyJSON(key) ':' stringifyJSON(value) + ',';
  }
  return '{' + resultStr + '}';
} */

