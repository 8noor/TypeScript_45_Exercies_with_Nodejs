// Making a Function
function make_shirt (size: string = "Large", printMessage:string = "I love printMessagr"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a functin with by-defualt values
make_shirt()

// Calling a functin now with Medium size and defualt message
make_shirt("Medium")

//Calling a function now with Small siza and also different  print message
make_shirt("small", "I love tsconfig.json")