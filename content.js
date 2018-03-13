// So this function returns a HTML collection, which is then looped over by the
// two loops at the bottom of the file.  Our problem comes with the first and last
// node in the range, because this function just gets the whole node rather than
// only the chunk that is needed.


var cors = { "Heiltsuk Duolos": [{ "to": "7", "from": "a" }, { "to": "kv", "from": "kv" }, { "to": "k\u0313v", "from": "\u00f0v" }, { "to": "xv", "from": "xv" }, { "to": "g\u030cv", "from": "\u00a9v" }, { "to": "qv", "from": "qv" }, { "to": "q\u0313v", "from": "\u0153v" }, { "to": "x\u030cv", "from": "\u00fev" }, { "to": "x\u030c", "from": "\u00ffx" }, { "to": "X\u030c", "from": "\u00ffX" }, { "to": "b", "from": "b" }, { "to": "p", "from": "p" }, { "to": "p\u0313", "from": "\u00b9" }, { "to": "m", "from": "m" }, { "to": "\u1e43\u0301", "from": "\u00a1" }, { "to": "\u1e43", "from": "\u2122" }, { "to": "m\u0313", "from": "\u00b5" }, { "to": "\u1e43\u0313", "from": "\u00b2" }, { "to": "d", "from": "d" }, { "to": "t\u0313", "from": "\u2020" }, { "to": "n", "from": "n" }, { "to": "\u1e47\u0301", "from": "\u00a2" }, { "to": "\u1e47", "from": "\u00de" }, { "to": "n\u0313", "from": "\u00f1" }, { "to": "\u1e47\u0313", "from": "\u00a6" }, { "to": "z", "from": "z" }, { "to": "c", "from": "c" }, { "to": "c\u0313", "from": "\u00e7" }, { "to": "s", "from": "s" }, { "to": "\u03bb", "from": "\u00df" }, { "to": "\u019b", "from": "\u00d2" }, { "to": "\u019b\u0313", "from": "\u0192" }, { "to": "\u026b", "from": "\u00e6" }, { "to": "\u2c62", "from": "\u00c6" }, { "to": "l", "from": "l" }, { "to": "\u1e37\u0301", "from": "\u00f8" }, { "to": "\u1e37", "from": "\u00aa" }, { "to": "l\u0313", "from": "\u00ac" }, { "to": "\u1e37\u0313", "from": "\u2026" }, { "to": "g", "from": "g" }, { "to": "k", "from": "k" }, { "to": "k\u0313", "from": "\u00f0" }, { "to": "x", "from": "x" }, { "to": "y", "from": "y" }, { "to": "i\u0301", "from": "\u00ed" }, { "to": "y\u0313", "from": "\u00a5" }, { "to": "i\u0313", "from": "\u00ee" }, { "to": "w", "from": "w" }, { "to": "u\u0301", "from": "\u00fa" }, { "to": "u", "from": "u" }, { "to": "w\u0313", "from": "\u201e" }, { "to": "u\u0313", "from": "\u00fc" }, { "to": "g\u030c", "from": "\u00a9" }, { "to": "q", "from": "q" }, { "to": "q\u0313", "from": "\u0153" }, { "to": "x\u030c", "from": "\u00fe" }, { "to": "h", "from": "h" }, { "to": "a\u0301", "from": "\u00e1" }, { "to": "a", "from": "a" }, { "to": "h\u0313", "from": "\u00d3" }, { "to": "a\u0313", "from": "\u00e5" }, { "to": "\u0127", "from": "\u00d4" }, { "to": "\u0294", "from": "\u2030" }, { "to": "\u2144", "from": "\u00cd" }, { "to": "\u2144", "from": "\u00ce" }, { "to": "\u2144\u0313", "from": "\u00cf" }], "Heiltsuk Times": [{ "to": "g", "from": "gv" }, { "to": "k", "from": "kv" }, { "to": "gv", "from": "gv" }, { "to": "kv", "from": "kv" }, { "to": "k\u0313v", "from": "\u02dav" }, { "to": "xv", "from": "xv" }, { "to": "g\u030cv", "from": "\u00a9v" }, { "to": "qv", "from": "qv" }, { "to": "q\u0313v", "from": "\u0153v" }, { "to": "x\u030cv", "from": "\u2248v" }, { "to": "b", "from": "b" }, { "to": "p", "from": "p" }, { "to": "p\u0313", "from": "\u03c0" }, { "to": "m", "from": "m" }, { "to": "\u1e43\u0301", "from": "\u00a1" }, { "to": "\u1e43", "from": "\u2122" }, { "to": "m\u0313", "from": "\u00b5" }, { "to": "\u1e43\u0313", "from": "\u2264" }, { "to": "d", "from": "d" }, { "to": "t\u0313", "from": "\u2020" }, { "to": "n", "from": "n" }, { "to": "\u1e47\u0301", "from": "\u00a2" }, { "to": "\u1e47", "from": "\u221e" }, { "to": "n\u0313", "from": "\u00f1" }, { "to": "\u1e47\u0313", "from": "\u222b" }, { "to": "z", "from": "z" }, { "to": "c", "from": "c" }, { "to": "c\u0313", "from": "\u00e7" }, { "to": "s", "from": "s" }, { "to": "\u03bb", "from": "\u00df" }, { "to": "\u019b", "from": "\u2202" }, { "to": "\u019b\u0313", "from": "\u0192" }, { "to": "\u026b", "from": "\u00e6" }, { "to": "l", "from": "l" }, { "to": "\u1e37\u0301", "from": "\u00f8" }, { "to": "\u1e37", "from": "\u00aa" }, { "to": "l\u0313", "from": "\u00ac" }, { "to": "\u1e37\u0313", "from": "\u2026" }, { "to": "k\u0313", "from": "\u02da" }, { "to": "x", "from": "x" }, { "to": "y", "from": "y" }, { "to": "i\u0301", "from": "\u00ed" }, { "to": "y\u0313", "from": "\u00a5" }, { "to": "i\u0313", "from": "\u00ee" }, { "to": "w", "from": "w" }, { "to": "u\u0301", "from": "\u00fa" }, { "to": "u", "from": "u" }, { "to": "w\u0313", "from": "\u2211" }, { "to": "u\u0313", "from": "\u00fc" }, { "to": "g\u030c", "from": "\u00a9" }, { "to": "q", "from": "q" }, { "to": "q\u0313", "from": "\u0153" }, { "to": "x\u030c", "from": "\u2248" }, { "to": "h", "from": "h" }, { "to": "a\u0301", "from": "\u00e1" }, { "to": "a", "from": "a" }, { "to": "h\u0313", "from": "\u02d9" }, { "to": "a\u0313", "from": "\u00e5" }, { "to": "x\u030c", "from": "\u2248" }, { "to": "\u2144", "from": "\u00cd" }, { "to": "\u2144", "from": "\u00ce" }, { "to": "\u2144\u0313", "from": "\u00cf" }] }




convertText = function(text, input, output) {
    if (text !== undefined && input !== undefined && output !== undefined) {
        if (output !== "Unicode") {
            var text_to_convert = text;
            var number_of_changes = cors[output].length
            for (var i = 0; i < number_of_changes; i++) {
                var re = new RegExp(cors[output][i]["to"], 'g')
                text_to_convert = text_to_convert.replace(re, cors[output][i]["from"]);
            }
            return text_to_convert
        } else if (output === "Unicode") {
            var text_to_convert = text;
            var number_of_changes = cors[input].length
            for (var i = 0; i < number_of_changes; i++) {
                var re = new RegExp(cors[input][i]["from"], 'g')
                text_to_convert = text_to_convert.replace(re, cors[input][i]["to"]);
            }
            return text_to_convert
        }
    }
};

// The solution is to remove the first and last node in the HTMLCollection, and
// write a function which only gets the highlighted text within those two nodes.
// All other nodes will be passed to the two loops.

function getElements(isStart) {
    if (window.getSelection() || document.selection) {
        sel = window.getSelection()
        if (sel.isCollapsed === false) {
            var range, sel, container;
            if (document.selection) {
                range = document.selection.createRange();
                range.collapse(isStart);
                return [range.parentElement()];
            } else {
                sel = window.getSelection();
                if (sel.getRangeAt) {
                    if (sel.rangeCount > 0) {
                        range = sel.getRangeAt(0);
                    }
                } else {
                    // Old WebKit
                    range = document.createRange();
                    range.setStart(sel.anchorNode, sel.anchorOffset);
                    range.setEnd(sel.focusNode, sel.focusOffset);

                    // Handle the case when the selection was selected backwards (from the end to the start in the document)
                    if (range.collapsed !== sel.isCollapsed) {
                        range.setStart(sel.focusNode, sel.focusOffset);
                        range.setEnd(sel.anchorNode, sel.anchorOffset);
                    }
                }

                if (range) {
                    container = range[isStart ? "startContainer" : "endContainer"];

                    // Check if the container is a text node and return its parent if so
                    return container.nodeType === 3 ? [container.parentNode] : [container];
                }
            }
        } else {
            return document.getElementsByTagName('*');
        }
    }
}

var elements = getElements(false);
console.log(elements, elements[0].children)
// if there the highlighted text only spans one node, we need to only replace
// the content within that node that is highlighted
var selection = window.getSelection()
if (selection.anchorNode === selection.focusNode){
  let highlighted = selection.toString();
  // replacePartialNodeText(elements[0], highlightedText, convertText)
  let totalText = selection.anchorNode.textContent
  let subtracted = subtractString(totalText, highlighted)
  let translated = convertText(highlighted, "Heiltsuk Duolos", "Unicode")
  let translatedTotalNodeText = [subtracted[0].slice(0, subtracted[1]), translated, subtracted[0].slice(subtracted[1])].join("");
  let selNode = selection.anchorNode
  let parentOfSelected = selNode.parentNode
  parentOfSelected.replaceChild(document.createTextNode(translatedTotalNodeText), selNode);
  elements = [];
// if nothing is highlighted, we want to translate the whole page, so nothing
// needs to go here
} else if (window.getSelection().toString() === ""){
  console.log("The whole page should get highlighted, there is no need for partial translation of a node");
  // else there are at least two nodes, in which case we need to remove the
  // first and last element from elements, and replace only the highlighted
  // text within

  // if there are two nodes
} else if (selection.anchorNode.nextSibling.nextSibling === selection.focusNode){

// there are more than two nodes
} else{
  let firstNode = elements[0];
  let lastNode = elements[elements.length - 1];
  // remove those nodes from the list to be converted
  elements = elements.slice(1, elements.length - 1)
  // I still need to check to see if this causes errors later if elements is empty
  // which can happen if the highlighted text only spans two nodes
}




// this function needs to remove a substring from a main string,
// return the shortened main string,
// and return the position in which the translated substring will be inserted
function subtractString(main, sub){
  let pos = main.indexOf(sub)
  if (pos == -1){
    return [main, -1]
  } else {
    let result = main.substr(0, pos) + main.substr(pos + sub.length)
    return [result, pos]
  }
}

function replacePartialNodeText(node, selectedText, func){
  let totalNodeText = node.textContent
  let subtracted = subtractString(totalNodeText, selectedText);
  let subtractedTotalNodeText = subtracted[0];
  let positionToReinsert = subtracted[1];
  let translated = func(selectedText, "Heiltsuk Duolos", "Unicode");
  let translatedTotalNodeText = [subtractedTotalNodeText.slice(0, positionToReinsert), translated, subtractedTotalNodeText.slice(positionToReinsert)].join("");
  let parentOfSelected = node.parentNode
  parentOfSelected.replaceChild(document.createTextNode(translatedTotalNodeText), node);
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = convertText(text, "Heiltsuk Duolos", "Unicode")
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
