let Data = [ {"key": "value", "ab": "hi there", "we": "say what"} ];
function mysort(items) {
    let sortOrder = 1;

    if(items[0] === "-") {
        sortOrder = -1;
        items = items.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[items].localeCompare(a[items]);
        }else{
            return a[items].localeCompare(b[items]);
        }
    }
}

Data.sort(mysort("key"));

console.log(Data);
