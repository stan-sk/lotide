const tail = function(array) {
  const arrTail = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      arrTail.push(array[i]);
    }
  }
  return arrTail;
};

module.exports = tail;
