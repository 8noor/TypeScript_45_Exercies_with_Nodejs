// Making a array of countries and print its original
let countriestovisit: string[] = ["Pakistan" , "China" , "India" , "Tokyo" , "America" , "Japan"];
console.log("original order:" , countriestovisit);

// print thr array alphabetical order wiyhout modifying the actual list
console.log("Alphabetical order:", [...countriestovisit]. sort());

// show that the array is still original order
console.log("still in original order", countriestovisit);

// print the array in reversed order without modifying the actual array list
console.log("Reverse order:", [...countriestovisit].reverse());

// show that the array is still original order
console.log("still in original order", countriestovisit);

//we have changed the original array order now
console.log("original array reversed:", countriestovisit.reverse());

// print the array to show that its back to list original order
console.log("Back too original order:", countriestovisit.reverse());

// print thr array to show its order han been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriestovisit.sort());

//we have changed again the original array order now in reverse order again
console.log("original array reversed again:", countriestovisit.reverse());


