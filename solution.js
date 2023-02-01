function persistence(num) {
  var a = num.toString();
  var arr = Array.from(String(num), Number);
  var count = 0;
  var i = 0;
  var multi = 0;
  
  if (a.length == 1) {
    return count;
  } else {
    while (i<a.length) {
      if (i == 0) {
        multi = arr[i]*arr[i+1];
      } else {
        if (a.length >2 && i > 1) {
          multi = multi*arr[i];
        }
      }
      i++;
    }
  count = count + 1;
  num = multi;
  return count + persistence(num);
  }
}
