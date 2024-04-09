function make_great(magicians: string[]): void{
    for(let i = 0; i < magicians.length; i++)  {                            // i stand for index string
          magicians[i] = magicians[i]   +     "     the great   "
    } ;                 
};

const magicians2: string[] = ["saeed",  "ali",  "ahmed" ];
make_great(magicians2);
console.log(magicians2);