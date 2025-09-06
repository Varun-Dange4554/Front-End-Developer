// string methods

let str = "varun dange";

let newstr=str.trim();
console.log(newstr);   // out put 'varun dange'

let upper=str.toUpperCase();
console.log(upper); // out put 'VARUN DANGE'


// Lower case

let lower = str.toLowerCase();
console.log(lower);  //// out put 'varun dange'

// string length
//The length property returns the length of a string:
let size = str.length
console.log(size);  // out put 11

// string charat()
//The charAt() method returns the character at a specified index (position) in a string:
let at = str.charAt(4);
console.log(at);   // out put 'n'

// string charCodeAt()
//The charCodeAt() method returns the code of the character at a specified index in a string:
let code = str.charCodeAt();
console.log(code);  // out put 118

// string codePointAt()

let point = str.codePointAt();
console.log(point);  // out put 118

// string concat
// concat() joins two or more strings:

let str1 = 'hello';

let full = str1.concat(" ", str);
console.log(full);   // 'hello varun dange'

// string at()
// Returns the character at a specified index in a string.
// It supports negative indices (starting from the end), which makes it more flexible than charAt().
let att = str.at(3);
console.log(att); //  out put 'u'

console.log(str.at(-1)); // last char   // out put 'e'
console.log(str.at(-2)); // last char  // out put 'g'

// string[]
//Property Access [ ]

let text = str[ 1];
console.log(text);  // out put 'a'

// string slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// slice(start, end)

let text1 = str.slice(0,5);
console.log(text1);   // out put 'varun'

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

let text2 = str.substring(0,4);
console.log(text2);   // out put 'varu'

// slice and substring


// similar reslt
console.log (str.slice(0, 4));  // out put 'varu'
console.log (str.substring(0, 4)); // // out put 'varu' 

// But
console.log (str.slice( -6));  // out put 'dange'
console.log (str.substring(-6));  // out put  'varun dange'

console.log (str.slice(4, 0));  // out put ' ' 
console.log (str.substring(4, 0));  // out put 'varu'

//String 
