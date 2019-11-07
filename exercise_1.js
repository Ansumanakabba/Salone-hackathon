// var arr = ["hello", "world", "hi", "bye"];
// var min = Math.min(...arr.map(({ length }) => length));
// console.log(min);

// var arr = ["hello", "world", "hi", "bye"];
// var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
// console.log(min);

var my_arry = ["hello", "muchasgracias", "hi", "elephant"];

function findShortest(arry) {
    return arry.reduce(function(prevWord,currWord) {
        if (currWord.length > prevWord.length) {
            //console.log(currWord);
            return currWord
        }
        else {
            //console.log(prevWord);
            return prevWord;
        }
    })
}

console.log(findShortest(my_arry));