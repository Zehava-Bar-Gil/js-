'use strict';

let ar = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"] , o = {}

ar.forEach(function(w) {
  w.split('').forEach(function(e) {
    return o[e] = (o[e] || 0) + 1;
  });
});

console.log(o)
