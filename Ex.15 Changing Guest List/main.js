var guestlist = ["Ather", "Ali", "Saima", "Nazia", "Barool", "Saeed"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi Ahh skta");
guestlist.splice(0, 1, "Areeba");
guestlist.forEach(function (guset) { return console.log("Salam ".concat(guset, ", wholud you like to dinner with me?")); });
