 /**
  * Calcular el medio, 
  * Verificar si el numero que buscamos es el medio
  * Si el numero que buscamos es el medio (es O(1))
  * Si el numero que buscamos es menor al medio, nos corremos para la izquierda y repetimos
  * Si el numero que buscamos es mayor al medio, nos corremos para la derecha
  */
  let buscado = 25;
  let items = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  function binarySearch (items, buscado) {
    let m;
    let i = 0;
    let j = items.length - 1;

    while (i <= j) {
      m = (i + j) / 2;

      if (buscado <= items[m]) {
        j = m-1;
      }

      if (buscado >= items[m]) {
        i = m+1;
      }
    }

    if (i - j === 2) {
      return m;
    }

    else {
     
      /**
       * Pequeña modificacion, 
       * en caso de no estar disponible el valor buscado, 
       * retorna un array con la posicion donde DEBERIA estar.
       */
      if (buscado-1 === items[j]) {
        return [items[j], items[i]];
      } 

      return -1
    }
  }



  console.log ("En: ", items);
  [2, 25, 30].forEach (function (element) {
    console.log ("Buscando: ", element);
    
    let result = binarySearch (items, element);

    if (typeof result === "object") {
      console.log ("El elemento deberia estar entre: ", result);
    }
    else {
      console.log ("El elemento se encuentra en index: ", result);
    }

    
  })
