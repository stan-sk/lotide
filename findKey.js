const findKey = function(obj, callback) {
  for (let key in obj) {
   if (callback(obj[key])) { 
    return key
   }
  }
}

module.exports =  findKey;




// Loop thru the object
// each iteration, getting the key
// key against the callback function stars === 2
// if matches found, stop and return the result

// obj[key] : { stars: 1 }
// x => x.stars === 2
//function ({ stars: 1 }) {
// return x.star === 2
// }