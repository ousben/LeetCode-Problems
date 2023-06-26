const twoSum = (array, target) => {
    let index = [];

    for(let i = 0; i < array.length; i++){
       for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === target) {
        index.push(i);
        index.push(j);
          }
       }
    }
    return index;
};