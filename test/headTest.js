const head = require('../head');
const assertEqual = require('../assertEqual');



//TEST CODE
assertEqual(head([1]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head