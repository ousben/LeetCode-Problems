const lengthOfLastWord = string => {
    separated = string.split(" ");
    numOfItems = separated.length;
    result = [];
    
    for(let i = 0; i < separated.length; i++) {
        if(separated[i] != "") {
            result = separated[i].length;
        }
    }
    return result
};