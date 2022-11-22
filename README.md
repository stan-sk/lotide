# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stan-sk/lotide`

**Require it:**

`const _ = require('@stan-sk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the `first element` of an array
* `tail(array)`: Returns an array without the `first element`
* `middle(array)`: Returns the `middle one` or `middle two` element(s) depends if an array length is odd or even
* `without(array)`: Returns a new array with items that wants to keep
* `takeUntil(array)`: Continue to return array's items to a new array until hitting a specific item
* `map(array, callback)`: creates a new array populated with the results of calling a provided function on every element in the calling array.
* `letterPositions(string)`: put in a string, return as an object showing the index of eaah character
* `findKey(object, callback)`: putting in an object and a callback function, and returning the key
* `findKeyByValue(object, value)`: putting in object and value, returning 
* `countLetters(string)`: count the occuring frequency of each character in a string, not counting the space
* `countOnly(array, object)`: putting in an array, and object with a boolean value, outputting an object key that is true.
* `eqArrays(...)`: check if two arrays are equal
* `eqObjects(...)`: check if two objects are equal
* `assertArraysEqual(...)`: check if the assertion of arrays passing or not.
* `assertEqual(...)`: check if expected result and actual result are equal
* `assertObjectsEqual(...)`: check if the assertion of object passing or not.

