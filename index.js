
function palindrome(word) {
  let x = (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) ? true : false;
  console.timeEnd("test0")
  return x
}
console.time("test0");
console.log(palindrome("Deleveled"));
console.log(palindrome("adam"));



function reverse(s) {
  var o = [];
  s = s.toLowerCase()
  for (var i = 0, len = s.length; i <= len; i++) o.push(s.charAt(len - i));
    let x = (o.join('') === s )? true : false;
    console.timeEnd("test1")
    return x
}

console.time("test1");
console.log(reverse("Deleveled"));
console.log(reverse("adam"));


function better_reverse(s) {
  var o = [];
  s = s.toLowerCase()
  for (var i = 0, len = s.length; i <= len; i++) o.push(s.charAt(len - i));

    if(o.join('') === s ){console.timeEnd("test2"); return true}
    console.timeEnd("test2")
    return false
}

console.time("test2");
console.log(better_reverse("Deleveled"));
console.log(better_reverse("adam"));



function okPalindrome(text) {
  var start = 0;
  var end = text.length - 1;
  while (start < end) {
    if (text[start++] !== text[end--]) {
      console.timeEnd("test3")
      return false;
    }
  }
  console.timeEnd("test3")
  return true;
}

console.time("test3");
console.log(okPalindrome("deleveled"));
//console.log(okPalindrome("adam"));
