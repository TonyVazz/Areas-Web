import React, { useState } from 'react'

useState


export const Figuras = ({baseC,baseR,alturaR,baseT,alturaT}) => {
   
    const [cuadrado, setCuadro] = useState()
    const [rectangulo, setRectangulo] = useState()
    const [triangulo, setTriangulo] = useState()
    
    //
    const handleAdd = (event) =>{
        setCuadro(baseC*baseC);
    }
    const handleAddtwo = (event) =>{
        setRectangulo(baseR*alturaR);

    }
    const handleAddthree = (event) =>{
        setTriangulo((baseT*alturaT)/2);
    }
    const handleAddfour = (event) =>{
        setCuadro('');
        setRectangulo('');
        setTriangulo('');
    }

  return (
    <div>
        <h1>Formulario App</h1>
         <h2>Area Cuadrado: {cuadrado}</h2>
         <h2>Area Rectangulo: {rectangulo}</h2>
         <h2>Area Triangulo: {triangulo}</h2>
         {/*Botones configuracion:
         1 Event es un objeto que tiene todos los eventos que puedes ejecutar con un evento,
         2 el handleAdd solo es una funcion y asi se coloca para llamarla,
         3 (event)=>handleAdd(event) = handleAdd cualquiera de estas 2 maneras se puede llamar (si la funcion
            tiene mas de 2 datos se usa el de arrow),
         4 si pongo () le estoy diciendo que se ejecute instantaneamente y sin parentesis tenemos que esperar
         hasta que nosotros le piquemos al boton,
         5 */}
        <button class='cuadrado' onClick={handleAdd}>
            Cuadrado
        </button>
        <button class='rectangulo' onClick={handleAddtwo}>
            Rectangulo
        </button>
        <button class='triangulo' onClick={handleAddthree}>
            Triangulo
        </button>
        <button class='limpiar' onClick={handleAddfour}>
            Limpiar
        </button>

    </div>
  )
}


