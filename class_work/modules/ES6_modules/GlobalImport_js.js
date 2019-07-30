// IIFEs can take arguments while they are invoked.
// globalVariable is the only variable that’s global
// you declare the global variables upfront, making it crystal clear to people reading your code.

(function (globalVariable) {

    // Keep this variables private inside this closure scope
    var privateFunction = function() {
      console.log('Shhhh, this is private!');
    }
  
    // Expose the below methods via the globalVariable interface while
    // hiding the implementation of the method within the 
    // function() block
  
    globalVariable.each = function(collection, iterator) {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          iterator(collection[i], i, collection);
        }
      } else {
        for (var key in collection) {
          iterator(collection[key], key, collection);
        }
      }
    };
  
    globalVariable.filter = function(collection, test) {
      var filtered = [];
      globalVariable.each(collection, function(item) {
        if (test(item)) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  
    globalVariable.map = function(collection, iterator) {
      var mapped = [];
      globalUtils.each(collection, function(value, key, collection) {
        mapped.push(iterator(value));
      });
      return mapped;
    };
  
    globalVariable.reduce = function(collection, iterator, accumulator) {
      var startingValueMissing = accumulator === undefined;
  
      globalVariable.each(collection, function(item) {
        if(startingValueMissing) {
          accumulator = item;
          startingValueMissing = false;
        } else {
          accumulator = iterator(accumulator, item);
        }
      });
  
      return accumulator;
  
    };
  
   }(globalVariable));

// ---------------------------------
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
}
}("Hello!", 5));