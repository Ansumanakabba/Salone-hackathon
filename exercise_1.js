
var data = ["hello", "muchasgracias", "hi", "elephant"];

function shortest(arry) {
    return arry.reduce(function(oldvWord,newWord) {
        if (newWord.length >oldvWord.length) {
            //console.log(currWord);
            return newWord
        }
        else {
            //console.log(prevWord);
            return oldWord;
        }
    })
}

console.log(shortest(data));
