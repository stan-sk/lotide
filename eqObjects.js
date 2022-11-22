const eqObjects = function(object1, object2) {
  
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  
  if (keys1.length !== keys2.length) {
    return false
  } 
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { 
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!