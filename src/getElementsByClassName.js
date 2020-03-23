// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  // your code here
  var hasClass = [];
  var element =  arguments[1] || document.body;
  var childNodesArray = element.childNodes;

  if(element.classList && element.classList.contains(className)){
    hasClass.push(element);
  }
  if(childNodesArray.length !== 0) {
    for(var i = 0; i < childNodesArray.length; i++) {
      hasClass = hasClass.concat(getElementsByClassName( className,childNodesArray[i]));
    }
  }

  return hasClass;

};
