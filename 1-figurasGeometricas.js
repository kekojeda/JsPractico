
// Cuadrado
console.group("Cuadrado");


function perimetroCuadrado(ladoCuadrado){
 return  ladoCuadrado * 4;
} 


function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
} 



console.groupEnd();

// Triangulo
console.group("Triangulo");


function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){
    return +ladoTriangulo1 + +ladoTriangulo2 + +baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}


console.groupEnd();

// Circulo

console.group("Circulo");




function perimetroCirculo(radio){
    return radio * 2;
} 

function circunferenciaCirculo(diametroCirculo){
    return diametroCirculo * Math.PI;
} 


function areaCirculo(radio){
    return (radio * radio) * Math.PI;
} 


console.groupEnd();


function calcularPerimetroCuadrado(){
   const input = document.getElementById("InputCuadrado")
   const value = input.value;
   const perimetro = perimetroCuadrado(value);
   alert(perimetro )
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area )
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1")
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2")
    const value2 = input2.value;
    const inputBase = document.getElementById("InputTrianguloBase")
    const valueBase = inputBase.value;

    


    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert(perimetro )
 }
 
 function calcularAreaTriangulo(){
 
    const inputBase = document.getElementById("InputTriangulo1")
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById("InputTrianguloAltura")
    const valueAltura = inputAltura.value;


    const area = areaTriangulo(valueBase, valueAltura);
    alert(area )
 }


