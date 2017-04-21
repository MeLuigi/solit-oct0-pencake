// Sets the href attribute of a certain parent element
function setParentHref(selElements, selAttr, regExp, elementType){
  for (i = 0; i < selElements.length; i++) {
    findUpTag(selElements[i], regexReplace(eval('selElements[i]' + selAttr), regExp), elementType);
  }
}

// Loop to find a parentElement
function findUpTag(selectedElement, attrReplace, tag) {
  switch (tag) {
    // Finds a A-Type ParentElement which href doesn't contains jpg   
    case 'A':
      while (selectedElement.tagName !== tag  && selectedElement.tagName !== 'BODY' ) {
        selectedElement = selectedElement.parentElement;
        if (selectedElement.tagName === tag && selectedElement.href.match(/^((?!(jpg)).)*$/)) {
          selectedElement.href = attrReplace;
        }
      }
      break;
  }
}

// Function to replace multiple times.... current maximum 3 different replacements
function regexReplace (stringRep, regExp){
  switch  (String(regExp[0].length)){
    case "undefined":
      return stringRep.replace(regExp[0], regExp[1]);
      break;
    case"2":
      return stringRep.replace(regExp[0][0], regExp[0][1]).replace(regExp[1][0], regExp[1][1]);
      break;
    case "3":
      return stringRep.replace(regExp[0][0], regExp[0][1]).replace(regExp[1][0], regExp[1][1]).replace(regExp[2][0], regExp[2][1]);
      break;
  }
}
