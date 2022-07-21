// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids){
    let result = 0
    ids = ([...new Set(ids)]).sort((a,b) => a - b)
    if (ids[0] != 0) return 0
    for(let i = 0; i < ids.length; i++){
        result++
       // console.log(result, ids[i + 1], ids[i])
        if (ids[i + 1] != result){
            return result
        }
    }
    return result
  }

console.log(nextId([0,1,2,3,5]), 4);
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
console.log(nextId([0,,1,1,2,3,4,5,6,7,8,9,10,12,12,13,14,16]), 11);
console.log(nextId([1,2,3,4,5,6,7,8,9,10]), 0);

// best answer
// function nextId(ids){
//     var x = 0;
//     while (ids.includes(x)) x++;
//     return x;
//   }