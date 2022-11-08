/**
 * START: Follow the instructions below.
 */

const populations = [
    1_412_600_000,
    60_317_116,
    69_950_850,
    10_678_632,
];

// The Array reduce method allows us to generate a single value from
// an array of values. Below we're using it to sum the values of the
// `populations` array.
//
// The `population` parameter in the callback has an inferred type of `number`.
// Change the initial value (`false`) to a value with the same type as `population`.
// This should fix the type error on Line 23.
//
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const sumOfPopulations = populations.reduce((total, population) => {
    return total + population;
}, +false);

console.log(sumOfPopulations);

// ----

export {};

//mettere 0 o trasformare false in number era uguale per cui :D
//penso che typescript lo dimenticherò tra 3 giorni, nessuna esercitazione seria, le soluzioni buttate nei commenti
//Sicuramente è uno di quegli argomenti che rivedrò a Dicembre/Gennaio