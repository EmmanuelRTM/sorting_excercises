/*Ejercicios ordenamiento

1.- Crea una función que ordene de forma descendente  un arreglo de numeros
        Ej. Entrada --> [9,3,1,6,5,88,-1,2,7]  Salida → [88,9,7,6,5,3,1,-1]*/
        console.log("\nEjercicio 1----------------")


        function insertionSortAscendent(vector){
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

        function insertionSortDescendent(vector){
            for(let i = 0; i < vector.length ; i++){
                var pos =i
                while(pos>= 0 && vector[pos] > vector[pos-1]){
                        var aux = vector[pos -1];
                        vector[pos-1]=vector[pos];
                        vector[pos]=aux;
                        pos--;
                    
                }
            }
            return vector;
        }
        
        const miArray=[9,3,1,6,5,88,-1,2,7] 
        console.log("Entrada---> ",miArray)
        var newArray=insertionSortDescendent(miArray);
        console.log("Salida---> ",newArray)
/*2- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/
            Ej. Entrada ---> [‘b’,’h’,’w’,’e’,’a’] Salida ----> [‘a’,’b’,’e’,’h’,’w’]*/
        //convierte de numero a char 
        //String.fromCharCode(65);
        function fromDecimalsToCharacters(array){//el array son decimales
            var transformedArray=[]
            for(var i =0 ;  i < array.length ; i++){
                transformedArray.push(String.fromCharCode(array[i]))// se convierte anumeros y se transforman
            }
            return transformedArray;
        }
        function fromCharactersToDecimals(array){//el array son decimales
            var transformedArray=[]
            for(var i =0 ;  i < array.length ; i++){
                transformedArray.push(array[i].charCodeAt())// se convierte anumeros y se transforman
            }
            return transformedArray;
        }
console.log("\nEjercicio 2----------------")
        const miArray2=['b','h','w','e','a'];
        console.log("Entrada---> ",miArray2)
        var miArray2InNumbers= fromCharactersToDecimals(miArray2)
       // console.log(miArray2InNumbers)
        var miArray2inNumberOrdered= insertionSortAscendent(miArray2InNumbers);
        //console.log(miArray2inNumberOrdered)
        var miArray2Result= fromDecimalsToCharacters(miArray2inNumberOrdered)
        console.log("Salida---> ",miArray2Result)



/*3. Crear una clase Alumno cons los siguientes datos:
        Nombre y calificaciones(arreglo de 5 números) y tiene un método promedio
        Crear otra clase llamada Salon que tenga un método que ordene por promedio de alumno de mayor a menor promedio*/
        console.log("\nEjercicio 3----------------")
        class Alumno{
            constructor(nombre,calificaciones){
                this.nombre=nombre;
                this.calificaciones=calificaciones;
                this.promedio=0;
            }
            promediar(){
                var longitud=this.calificaciones.length;
                var array= this.calificaciones;
                var sumaTotal=0
                for (let i = 0; i < longitud; i++) {
                    sumaTotal = sumaTotal+array[i];
                }
                var promedio=sumaTotal/longitud;
                return promedio;
            }
            
            setPromedio(dato){
                this.promedio=dato;
            }
        }

        function isItUndefined(data){
            if( data=== undefined || data===null){
                return -1;
            }else{
                return data;
            }
        }
            

        class Salon{
            constructor(){
                this.clase=[]
            }
            addAlumno(alumno){
                this.clase.push(alumno);
            }
            ordenarPorPromedioDescendente(){
                var vector= this.clase;
                for(let i = 0; i < vector.length ; i++){
                    var pos = i
                    //console.log(vector[pos].promediar());
                    //console.log(pos)
                    while(pos> 0 && vector[pos].promediar() > vector[pos-1].promediar()){//empieza en menos 1
                        //console.log(pos)
                            var aux = vector[pos -1];
                            vector[pos-1]=vector[pos];
                            vector[pos]=aux;
                            pos--;
                    }
                }
                return vector;
            }
        }

var alumn1 = new Alumno("Panfilo",[2,3,4,5,6]);
//console.log(alumn1.promediar())
var alumn2 = new Alumno("Jose",[5,2,8,9,5]);
var alumn3 = new Alumno("Maria",[9,7,8,5,9]);
var alumn4 = new Alumno("Ami",[10,6,8,6,7]);
var alumn5 = new Alumno("Harmen",[10,10,7,8,10]);


var grupoSalon = new Salon()
grupoSalon.addAlumno(alumn1)
grupoSalon.addAlumno(alumn2)
grupoSalon.addAlumno(alumn3)
grupoSalon.addAlumno(alumn4)
grupoSalon.addAlumno(alumn5)

alumn1.setPromedio(alumn1.promediar());
alumn2.setPromedio(alumn2.promediar());
alumn3.setPromedio(alumn3.promediar());
alumn4.setPromedio(alumn4.promediar());
alumn5.setPromedio(alumn5.promediar());
console.log("Entrada:------->", grupoSalon);
var grupoOrdenado=grupoSalon.ordenarPorPromedioDescendente();
console.log("Salida:------->", grupoOrdenado);

/*4. Crear una funcion que ordene palabras de menor numero de letras a mayor
        Ej Entrada [”adios”,”hola”,”maximo”,”uno”,”despedida”] salida -> [“”uno,“hola”,”adios”,”maximo”,”despedida”]*/
        console.log("\nEjercicio 4----------------")
        class UniqueWord{
            constructor(word){
                this.word=word;
                this.longitude=word.length;
            }
            getLongitude(){
                return this.longitude;
            }
        }

        class ListOfWords{

            constructor(){
                this.list=[]
            }

            addWord(word){
                this.list.push(word);
            }

            addList(listToAdd){
                for(var i = 0 ; i< listToAdd.length ;i++){
                    var newWord= new UniqueWord(listToAdd[i])
                    this.list.push(newWord);
                }
            }

            ordenarPorLongitudAscendente(){
                var vector= this.list;
                for(let i = 0; i < vector.length ; i++){
                    var pos = i
                    //console.log(vector[pos].promediar());
                    //console.log(pos)
                    while(pos> 0 && vector[pos].getLongitude() < vector[pos-1].getLongitude()){//empieza en menos 1
                        //console.log(pos)
                            var aux = vector[pos -1];
                            vector[pos-1]=vector[pos];
                            vector[pos]=aux;
                            pos--;
                    }
                }
                return vector;
            }
        }

        var inputOfWords=["adios","hola","maximo","uno","despedida"];
        console.log("Entrada----->", inputOfWords)
        var wordsWLongitude= new  ListOfWords();
        wordsWLongitude.addList(inputOfWords);
        var transformedArray= wordsWLongitude.ordenarPorLongitudAscendente();
        //var resultedArray= transformedArray.getNewArray()
        function newList(array){
            var newArray=[]
            for(var i = 0; i< array.length; i++){
                newArray.push(array[i].word)
            }
            return newArray;
        }
        console.log("Salida--->",newList(transformedArray));


/*5. Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0
    Entrada -> [[7,3],[2,2],[1,0],[4,3]]  Salida ---> [[1,0],[2,2],[4,3],[7,3]]*/


    console.log("\nEjercicio 5----------------")
        class Coordinate{
            constructor(cxy){
                this.cxy=cxy;
                this.distance=0;
            }
            getPitagoras(){
                var calculatedDistance=Math.sqrt((this.cxy[0]*this.cxy[0])+(this.cxy[1]*this.cxy[1]))
                this.distance=calculatedDistance;
                return this.distance
            }
        }

        class ListOfCoordinates{

            constructor(){
                this.list=[]
            }

            addCoordinate(coordinate){
                this.list.push(coordinate);
            }

            addList(listToAdd){
                for(var i = 0 ; i< listToAdd.length ;i++){
                    var newPush= new Coordinate(listToAdd[i])
                    this.list.push(newPush);
                }
            }

            ordenarPorDistanciaAscendente(){
                var vector= this.list;
                for(let i = 0; i < vector.length ; i++){
                    var pos = i
                    //console.log(vector[pos].promediar());
                    //console.log(pos)
                    while(pos> 0 && vector[pos].getPitagoras() < vector[pos-1].getPitagoras()){//empieza en menos 1
                        //console.log(pos)
                            var aux = vector[pos -1];
                            vector[pos-1]=vector[pos];
                            vector[pos]=aux;
                            pos--;
                    }
                }
                return vector;
            }
        }

        var inputOfCooridnates=[[7,3],[2,2],[1,0],[4,3]];
        console.log("Entrada----->", inputOfCooridnates)
        var coordinatesToOperate= new ListOfCoordinates();
        coordinatesToOperate.addList(inputOfCooridnates);
        var transformedArrayCoordinates= coordinatesToOperate.ordenarPorDistanciaAscendente();
        //var resultedArray= transformedArray.getNewArray()
        function newListForCoordinates(array){
            var newArray=[]
            for(var i = 0; i< array.length; i++){
                newArray.push(array[i].cxy)
            }
            return newArray;
        }
        console.log("Salida--->",newListForCoordinates(transformedArrayCoordinates));