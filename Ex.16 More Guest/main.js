// creating a guest list arrey
var guestlist = ["Areeba", "Batool", "Nazia", "Saeed", "Saima", "Haya"];
// Making variable for those who dont come
var dontcome = guestlist[0];
// Print the name of guset who dont come
console.log(dontcome, "Nahi Ahh sakte hain");
// Add or remove values from guest list array
guestlist.splice(0, 1, "Noorjahan");
// Message print  for bigger table
console.log("Good News ! I found a bigger dinner table so I am more peoples.");
// Adding of new value at starting index of array
guestlist.unshift("saad");
// Adding a new value at ending index of array
guestlist.push("zeeshan");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 3);
// Adding a new guest to middle index of array 
guestlist.splice(middleIndex, 0, "Fatima");
// print message of updated list
console.log("updated list of our guests");
// sending a invitation message to our guests one by one with thier names
guestlist.forEach(function (oneguest) { return console.log("Assalam u alaikum ".concat(oneguest, ", would you like to dinner with me")); });
