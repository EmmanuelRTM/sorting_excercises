function insertionSort(vector){
    for(let i = 0; i < vector.length ; i++){
        var pos =i
        while(pos>= 0 && vector[pos] < vector[pos-1]){
                var aux = vector[pos -1];
                vector[pos-1]=vector[pos];
                vector[pos]=aux;
                pos--;
            
        }
    }
    return vector;
}

const miArray=[10, 4, 40, 32, 67, 12, 43, 31, 65, 1]

var newArray=insertionSort(miArray);
console.log(newArray)

function insertionSortB(vector){
    for(let i = 0; i < vector.length ; i++){
        var pos =i
        var valor = vector[i]

        while(pos>= 0 && valor < vector[pos-1]){
            //en vez de switch solo se intercambia
            // se bsuca el sitio donde deberia d eir;
            vector[pos]=vector[pos-1]
            pos--;
        }
        vector[pos]=valor;
    }
    return vector;
}

var newArray2=insertionSortB(miArray);
console.log(newArray2)