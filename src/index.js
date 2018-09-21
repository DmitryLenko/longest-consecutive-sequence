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