'use strict';

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, func) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: Designed to take any value and return that value unchanged
 * 
 * @param {any value} value: the value to be returned
 * 
 * @return {any Datatype} value: value returned unchanged 
 */
 
function identity(value){
    return value;
}

/**
 * typeOf: Designed to take any value and return <value> as a string 
 * 
 * @param {any value} value: the value to be returned as a string
 * 
 * @return {string} value: string describing <value>
 */
 
function typeOf(value){
    if (Array.isArray(value) === true){
        return 'array';
    }   else if (value === null){
        return 'null';
    }   else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to return a specific number of items from a collection
 * 
 * @param {array} array: the collection over which to iterate
 * @param {number} number: the number of elements to return at the start of the array
 * 
 * @return {array} collection: if array param is not an array, return an empty
 * array. If number param is greater than array.length return the full array. 
 * Otherwise return the first number of items in the array.
 */
 
function first(array, number){
   var arr = [];
   if(!Array.isArray(array)){
       return arr;
   } 
   else if(number === undefined ||typeof number !== 'number'){
       return array[0];
   } 
   else if (number > array.length){
       return array;
   } 
   else {
       for (var i = 0; i < number; i++){
           arr.push(array[i]);
       }
       return arr;
   }
}
module.exports.first = first;

/**
 * last: Designed to return a specific number of items from a collection
 * 
 * @param {array} array: the collection over which to iterate
 * @param {number} number: the number of elements to return at the end of the array
 * 
 * @return {array} array: if array param is not an array, return an empty
 * array. If number param is greater than array.length return last item in array. 
 * Otherwise return the last number of items in the array.
 */
 
function last(array, number){
       var arr = [];
   if(!Array.isArray(array)){
       return arr;
   } 
   else if(number === undefined ||typeof number !== 'number'){
       return array[array.length-1];
   } 
   else if (number > array.length){
       return array;
   } 
   else if (number < 0){
       return arr;
   }
   else {
       for (var i = array.length-1; i >= number - 1 ; i--){
           arr.unshift(array[i]);
       }
       return arr;
   }
}
module.exports.last = last;

/**
 * indexOf: Designed to return the index of the collection where the value 
 * appears first
 * 
 * @param {array} array: the collection over which to iterate
 * @param {any value} value: the value to search for in the collection
 * 
 * @return {number} value: returns the index of the value being searched for.
 * If the value is not found, returns -1
 */

function indexOf(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        } 
    }  return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to search for a value in an array
 * 
 * @param {array} array: the collection over which to iterate
 * @param {any value} value: the value to search for in the collection
 * 
 * @return {boolean} value: returns true if value is found, otherwise returns false
 */
 
function contains(array, value){
    return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * unique: Designed to return a new array with all duplicate values removed
 * 
 * @param {array} array: the collection over which to iterate
 * 
 * @return {array} array: returns original array with duplicates removed
 */
 
function unique(array){
    var result = [];
    for (var i = 0; i < array.length; i++){
   if ( indexOf(result, array[i]) === -1){
       result.push(array[i]);
   }
    }
   return result;
}
module.exports.unique = unique;

/**
 * filter: Designed to check which elements in the passed array satisfy the 
 * condition. Forms a new array of all those elements which func passes true
 * 
 * @param {array} array: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {array} collection: return a new array of elements for which func 
 * passed true
 */
 
function filter(array, func){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
       if (func(array[i], i, array)){
           newArray.push(array[i]);
       }
    } return newArray;
}
module.exports.filter = filter;

/**
 * reject: Designed to check which elements in the passed array fail the 
 * condition. Forms a new array of all those elements which func passes fail
 * 
 * @param {array} array: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {array} collection: return a new array of elements for which func 
 * failed
 */
 
 function reject(array, func){
   return filter(array, function(element, index, array) {
   return !func(element, index, array);
 });
}

module.exports.reject = reject;

/**
 * partition: Designed to split an array into two arrays. The first array 
 * contains the elements which func passed true, the second contains the element 
 * func passes false
 * 
 * @param {array} array: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {array} collection: returns an array of arrays. One array contains
 * values passed by func, the other containes values that failed
 */
 
function partition(array, func){
    var newArrayTrue = [];
    var newArrayFalse = [];
    var newArrays = [];
    for (var i = 0; i < array.length; i++){
       if (func(array[i], i, array)){
           newArrayTrue.push(array[i]);
       } else if (!func(array[i], i, array)) {
           newArrayFalse.push(array[i]);
       }
    } 
    newArrays.push(newArrayTrue);
    newArrays.push(newArrayFalse);
    return newArrays;
}
module.exports.partition = partition;

/**
 * map: Designed to produce a new array of values by mapping each value in the
 * array through func
 * 
 * @param {array or object} collection: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {array} collection: returns an array of values passed through func
 */

function map(collection, func){
    var newArray = [];
        if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            newArray.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
            newArray.push(func(collection[key], key, collection));
        }
    }   return newArray;
}
module.exports.map = map;

/**
 * pluck: Designed to return an array containing the value of property for every 
 * element in array>
 * 
 * @param {array} array: the collection over which to iterate
 * @param {any value} preoperty: the properties to return from the collection
 * 
 * @return {array} collection: returns an array of values that had the specific
 * property searched for.
 */
 
function pluck(array, property){
    return array.map(function(object) {
    return object[property];
  });
}
module.exports.pluck = pluck;

/**
 * every: Designed to return true if all values passsed through func return true
 * 
 * @param {array or object} collection: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {boolean} value: returns true if all values passed, otherwise 
 * returns false
 */
 
function every(collection, func){
    if (func === undefined){ 
        func = identity;
    }
    var booleanArray = [];
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            booleanArray.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
            booleanArray.push(func(collection[key], key, collection));
        }
    } 
    for (var i = 0; i < booleanArray.length; i++){
        if (booleanArray[i] === false){
            return false;
        }
    }
    return true;
}
module.exports.every = every;

/**
 * some: Designed to return true if at least one value passsed through func 
 * return true
 * 
 * @param {array or object} collection: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * 
 * @return {boolean} value: returns true if at least one value passed, otherwise 
 * returns false
 */
 
function some(collection, func){
     if (func === undefined){ 
        func = identity;
    }
    var booleanArray = [];
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
            booleanArray.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection){
            booleanArray.push(func(collection[key], key, collection));
        }
    } 
    for (var i = 0; i < booleanArray.length; i++){
        if (booleanArray[i] === true){
            return true;
        }
    }
    return false;
}
module.exports.some = some;

/**
 * reduce: Designed to transform an array's properties into one single value
 * 
 * @param {array} array: the collection over which to iterate
 * @param {function} func: the function to call for each value in the collection
 * @param {counter or null} seed: used to count or set return value
 * 
 * @return {any value} value: returns the final 'previous result' value 
 */
 
function reduce(array, func, seed) {
    var prevResult;
    if (seed !== undefined) {
        prevResult = seed;
        for (var i = 0; i < array.length; i++) {
            prevResult = func(prevResult, array[i], i);
        }
    } else {
        prevResult = array[0];
        for (var i = 1; i < array.length; i++) {
            prevResult = func(prevResult, array[i], i);
        }
    }
    return prevResult;
}
module.exports.reduce = reduce;

/**
 * extend: Designed to copy other object's properties into one single object
 * 
 * @param {object} object: the original object
 * @param {objects} ...object2: objects to copy data from
 * 
 * @return {object} object: returns object with added key/value pairs from all 
 * other objects
 */
 
function extend(object, ...object2) {
        Object.assign(object, ...object2);
        return object;
}
module.exports.extened = extend;