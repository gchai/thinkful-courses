/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  const lines = new Set();
  
  for (let currNode = words.head; currNode; currNode = currNode.next){
    const word = currNode.value.toLowerCase();
    if (concordance[word]){
      concordance[word].forEach(lineNum => {
        lines.add(data[lineNum])
      })
    }
  }
  return [...lines]
}

module.exports = searchLines;