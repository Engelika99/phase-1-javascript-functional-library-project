function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    const newArray = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        newArray.push(callback(collection[key], key, collection));
      }
    }
  
    return newArray;
  }
  function myReduce(collection, callback, acc) {
    let newCollection = collection
    if (!(collection instanceof Array)) {
      newCollection = Object.values(collection);
    }
    
    let startIndex = 0;
    if (typeof acc === 'undefined') {
      acc = newCollection[0];
      startIndex = 1;
    }
    
    for (let i = startIndex; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], collection)
    }
    
    return acc
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) { 
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]; 
        }
      }
    } else { 
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key]; 
        }
      }
    }
    return undefined; 
  }
  function myFilter(collection, predicate) {
    let newArray = []
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        newArray.push(collection[i])
      }
    }
    return newArray
  }
  const mySize = (collection) => {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1]
    } else {
      return array.slice(-n)
    }
  }
  function myKeys(object) {
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }
  
  
  
  