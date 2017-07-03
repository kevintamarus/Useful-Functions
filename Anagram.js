//shorter method but more complexity
var isAnagram = function(string1, string2) {
  var str1 = string1.split('').sort().join('');
  var str2 = string2.split('').sort().join('');
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

//longer method but less complexity
var isAnagram = function(string1, string2) {
  var result = true;
  if (string1.length !== string2.length) {
    result = false;
  }
  var object1 = histogram(string1);
  var object2 = histogram(string2);
  for(var key in object1 ) {
    if (object1[key] !== object2[key]) {
      result = false;
    }
  }
  return result;
}

var histogram = function(string) {
  var object = {};
  for(var i=0; i<string.length; i++) {
    if (!object[string[i]]) {
      object[string[i]] = 1;
    }
    else {
      object[string[i]]++;
    }
  }
  return object;
}

//true
console.log( isAnagram('loop', 'pool') );
console.log( isAnagram('12345', '52341') );
console.log( isAnagram('boxcar', 'cabrox') );
console.log( isAnagram('racecar', 'ccaaerr') );
//false
console.log( isAnagram('asdfasdf', 'fads;hfio') );
console.log( isAnagram('loop', 'pooly') );
console.log( isAnagram('loooooo', "looooooo") );
console.log( isAnagram('true', 'false') );
console.log( isAnagram('tommarvoloriddle', 'iamlordvoldemort') );