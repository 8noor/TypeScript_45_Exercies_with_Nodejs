// Making a Function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love printMessagr"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// Calling a functin with by-defualt values
make_shirt();
// Calling a functin now with Medium size and defualt message
make_shirt("Medium");
//Calling a function now with Small siza and also different  print message
make_shirt("small", "I love tsconfig.json");
