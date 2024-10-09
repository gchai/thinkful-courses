/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
  const concordance = new Map();
  
  data.forEach((line, num)=> {
    const words = line.split(/[\s.,';]/).filter(word => word !==``)
    
    words.forEach(word => {
      const lowerWord = word.toLowerCase();
      
      if(!concordance.has(lowerWord)){
        concordance.set(lowerWord, [num]);
      } else if (!concordance.get(lowerWord).includes(num)){
        concordance.get(lowerWord).push(num);
      }
      
      
    })
  })
  return Object.fromEntries(concordance);
}

module.exports = concordance;

