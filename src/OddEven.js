// Returns random from (inclusive) to (exclusive)
function randomNumGenerator(from, to){
    return Math.random() * (max - min) + min;
}

// Returns random odd or even number
    function GetRandomOddOrEven1to10(type, randomNumGenerator){
        var found = false;
        while(!found){
            var num = randomNumGenerator(1, 10);
            if(type === 'odd'){
                if(num % 2 !== 0){
                    return num;
                }
            }
            else{
                if(num % 2 === 0){
                    return num;
                }
            }
        }
    }