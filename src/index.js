module.exports = function longestConsecutiveLength(array) {
    var counter = 0;
    var result = 0;
    var map = new Map();
    array.forEach( item => {
        map.set(item, item);
    })
   
    for(var [ , index] of map) {
        if(!map.has(index-1)) {
            counter = 1;
            while(map.has(index+1)) {
                counter++;
                index++;
                map.delete(index);
            }
            if(result < counter) {
                result = counter;
            }
        }
    }
    return result;
}



//var obj = {};
//array.forEach( item => {
//    map.obj[item] = item;
//})
//    for(let i = 0; i < array.length; i++) {
//             if(obj[array[i]-1] === undefined) {
//                 counter = 1;
//                 while(obj[array[i]+1] != undefined) {
//                     if(array[i] != array[i-1]){
//                         counter++;
//                     }
//                     i++;
//                 }
//                 if(counter > result) {
//                     result = counter;
//                 }
//                 counter = 0;
//             } 
//     }
       
//     return result;
// ---------------------------------------------------------------------
    /*array.sort(comparenumber)
    for(let i = 0; i< array.length; i++) {
        if(array[i-1] === undefined && array[i] != undefined) {
            counter = 1;
            result = 1;
        }
        if(array[i+1] - array[i] === 0) {

        } else if(array[i+1] - array[i] === 1 ) {
                counter++;
            } else {
                if(result < counter) {
                    result = counter;
                    counter = 1;
                } else {
                    counter = 1;
                }
            }
        
    }
    return result;*/

    /*function comparenumber (a,b) {
        return a-b;
    }*/