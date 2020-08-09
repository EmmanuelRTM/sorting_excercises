function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for( let j= 0; j < array.length; j++ ){
            if(array[j]>array[j+1]){
                var currentNumber = array[j];
                array[j]=array[j+1]
                array[j+1]=currentNumber;
            }
        }
    }
    return array;
}

const miArray=[10, 4, 40, 32, 67, 12, 43, 31, 65, 1]

var newArray=bubbleSort(miArray);
console.log(newArray)