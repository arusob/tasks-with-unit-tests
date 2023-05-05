function onlyEven (array) {
	return array.filter((number) => number % 2 == 0) 
}

function onlyOneWord (array) {
	return array.filter((s) => s.split(' ').length  <= 1);
}

function positiveRowsOnly (matrix) {
  return matrix.filter((row) => row.filter((num) => num > 0).length === row.length);
};

function allSameVowels (array) {
  var vowels = ['a','e','i','o','u']
  var arrayOfWordWithVowels = []
  for(var word of array){
      let alphabets = word.split('')
      const uniqueAlphabets = [...new Set(alphabets)]
      const uniqueAlphabetsByVowels = uniqueAlphabets.filter(obj => {
          return vowels.indexOf(obj) !== -1;
      });
      const occurrences = uniqueAlphabetsByVowels.map((alpha) => ({
          key: alpha,
          value: alphabets.filter((alphabet) => alphabet === alpha).length,
      }))
      occurrences.unshift(word)
      arrayOfWordWithVowels.push(occurrences)
  }
  var elementWithTwoEl = arrayOfWordWithVowels.filter((Element) => Element.length <=2)
  var elementWithTwoElAndOneVowel = elementWithTwoEl.filter((El) => El[1].value >= 2)
  var result = []
  for(var arr of elementWithTwoElAndOneVowel) {
      result.push(arr[0])
  }
  return result
};


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};