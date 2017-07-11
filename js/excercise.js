/*var str1 = 'Manu Jha';
var str = 'Manu kumar Jha';
var parts = str.split(' ');
var len = parts.length;
//console.log(parts);*/
/*for (var i = len; i >= 0; i--) {

    console.log(parts[i]);

}
console.log(parts);*/
//console.log(len);
//console.log(parts[2] + ', ' + parts[0] + ' ' + parts[1]);

//console.log(parts);
//console.log(parts[1] + ', ' + parts[0]);

/*var str2 = "manu";
var str22 = str2.split('');
var len1 = str22.length;
console.log(str22.filter(function(s) {
    console.log(s + ",");
}));

console.log(str22.reverse().join(''));
for (var i = 0; i < len1; i++) {
    console.log(str22[i]);
}*/

/*
var str4 = 'Manu kumar Jha';
var parts4 = str4.split(' ');

function reverse(s) {
    var o = [];
    for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
        o[j] = s[i];
    return o.join('');
}
console.log(reverse(str4));
*/
var str4 = 'Manu';

function reverse(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
        o.push(s.charAt(len - i));
    return o.join('');
}
console.log(reverse(str4));

var sum = function() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += parseInt(arguments[i]);
    }
    return res;
}

console.log(sum(5, 4, 1));