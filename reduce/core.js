function sum (array) {
    return array.reduce((result, current) => {
      return result + current;
    })
  };
  
  function productAll (array) {
    const arrayLink = array.reduce((total, value) => {
      return total.concat(value)
    })
    return arrayLink.reduce((accumulator, current) => accumulator * current)
  };
  
  function objectify (array) {
    return objectFromArray = array.reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});
  };
  
  function luckyNumbers (array) {
    const text = "Your lucky numbers are: "
    const and = "and "
    array.unshift(text)  
    array.splice(array.length-1, 0, and)
    const newarr = array.reduce((prev, curr) => {
      if(typeof(curr) === 'number' && typeof(prev) === 'string' && curr != array[array.length-1]) {
          return prev + '' + curr + ', '
      } else {
          return prev + '' + curr
      } 
    });
    return newarr
  };
  
  module.exports = {
    sum: sum,
    productAll: productAll,
    objectify: objectify,
    luckyNumbers: luckyNumbers
  };