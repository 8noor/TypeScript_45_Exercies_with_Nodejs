// Creating a Array with 7 Values
let userName =["Anum",  "Batool", "Nazia", "saba","Admin", "Haya", "Hina"];

// Remove all values from our Array now our array is empty
userName = []
 
// If statment for checking lenght of our array is empty
if (userName.length === 0){
   console.log("Your Array in empty we need to find some users!") 
}else{
    // If Array is not empty use foreach loop on array
    userName.forEach(oneUser =>{
        if(oneUser === "Admin") {
           console.log(`Hello ${oneUser}, would you like to see a status report? `)
        }else {
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
        
    })



}
