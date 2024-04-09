function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { // i stand for index string
        magicians[i] = magicians[i] + "   the great  ";
    }
    ;
}
;
var magicians2 = ["saeed", "ali", "ahmed"];
make_great(magicians2);
console.log(magicians2);
