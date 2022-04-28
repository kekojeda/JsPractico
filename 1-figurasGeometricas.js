
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


function alturaTrianguloIsoseles(ladoA, ladoB, base){
    if(ladoA == ladoB){
        const altura = Math.sqrt( (ladoA **2 ) - ((base**2)/4) )
        return altura
    }else {
        alert("No es un triangulo ISOSELES")
    }

}


console.groupEnd();

// Circulo

console.group("Circulo");




function perimetroCirculo(radio){
    return radio * 2;
} 

function circunferenciaCirculo(perimetroCirculo){
    return perimetroCirculo * Math.PI;
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

 function calcularAlturaTrianguloIsoseles(){

    const input1 = document.getElementById("InputTriangulo1")
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2")
    const value2 = input2.value;
    const inputBase = document.getElementById("InputTrianguloBase")
    const valueBase = inputBase.value;

    const altura = alturaTrianguloIsoseles(value1, value2, valueBase);
    alert(altura )



    

}





 function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio")
    const value = inputRadio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)

    
} 

function calcularCircundferenciaCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio")
    const value = inputRadio.value;
    const perimetro = perimetroCirculo(value)

    const circunferencia = circunferenciaCirculo(perimetro);
    alert(circunferencia)

} 


function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio")
    const value = inputRadio.value;

    const area = areaCirculo(value);
    alert(area);

}








