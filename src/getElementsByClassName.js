// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here


  var element = document.body;
  var childNodesArray = element.childNodes;

  if(element.classList && element.classList.contains(className)){
    hasClass.push(element);
  }
  for(var i = 0; i < childNodesArray.length; i++) {
    var hasClass = [];
    getElementsByClassName( className,childNodesArray[i]);
    return hasClass;
  }



  /* var body = document.body;
  var childNodesArr = body.element.childNodes;
  var hasClass = [];

  for (var i = 0; i < body.childnodes.length;i++) {
    var individualChildNode = body.childnodes[i];
    if (  individualChildNode.element.classList === className) {
       hasClass.push(individualChildNode);
    }
  }
 return hasClass; */

};
