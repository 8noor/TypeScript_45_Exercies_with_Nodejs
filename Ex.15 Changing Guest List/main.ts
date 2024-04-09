let guestlist = ["Ather" , "Ali" , "Saima" , "Nazia" , "Barool" , "Saeed"];

let dontcome = guestlist[0];

console.log(dontcome, "nahi Ahh skta");

guestlist.splice(0, 1 , "Areeba");

guestlist.forEach(guset => console.log(`Salam ${guset}, wholud you like to dinner with me?`));
