/**
 * Sort Burbuja
 * Comenzando desde 1, checkear el anterior, si es mayor, permutar.
 * Comenzar de nuevo
 */
let haycambios = true;
let items = [6, 5, 9, 11, 98, 2, 75, 3, 25, 55, 74, 14, 1, 56, 99];
let i;

console.log (items)

do {
  haycambios = false;

  for (i = 1; i < items.length; i++) {
    
    if (items[i] < items[i-1]) {
      let temp = items[i];
      items[i] = items[i-1];
      items[i-1] = temp;

      haycambios = true;
    }
  }

} while (haycambios);

console.log (items)