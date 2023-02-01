function persistence(num) {
  var a = num.toString();
  var arr = Array.from(String(num), Number);
  var count = 0;
  var i = 0;
  var multi = 0;
  
  if (a < 9) { //one digit
    return count;
  } else {
    while (i<a.length) {
      if (i == 0) { //multiply 1st digit*2nd digit
        multi = arr[i]*arr[i+1];
      } else {
        if (i > 1) { //skip 1st and 2nd digit, multiply
          multi = multi*arr[i];
        }
      }
      i++;
    }
  count = count + 1;
  num = multi;
  return count + persistence(num); //recursion
  }
}
