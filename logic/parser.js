// parser.js
// helper functions to parse the header objects

/*
Ok as for the language....I want to slice everything before the ',' which is charCode 44....
so I am interting thought the string until I find charChode 44 and slicing the rest

*/

const comma = (str) => {
  for (let i = 0; i < str.length; i++){
      if (str[i].charCodeAt(0) == 44){
          return str.slice(0, i);
      }
  }  
};

/*

now I need to extract the first set of parantheticals...again another simple slice operation.
I'll need to grab the index to begin and index to end +1....
simple iteration looking for charCodes 40 '(' and 41 ')'

In psudeo code:

declar index1 and index2
Iterate over str return index; iterate over next string beginning at index1 and  returning next index;
mutate object by slicing value at indices

*/

const indices = (str) => {
    let index1 = 0;
    let index2 = 0;
    
    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt(0) == 40){
            index1 = i;
            break;
        }
    }
    for (let i = index1; i < str.length; i++){
        if (str[i].charCodeAt(0) == 41){
            index2 = i
            break;
        }
    }
    return str.slice(index1, index2 + 1);
};

// the IP address has a lot of leading zeros to account for future IPv6 expansion.
// current IPv4 is 32 bit so we need to rid of all the leading bits for formatting puproses

module.exports = (obj) => {
    obj['ip'] = obj['ip'].slice(7);
    obj['language'] = comma(obj['language']);
    obj['os'] = indices(obj['os']);
    return obj;
    
};



