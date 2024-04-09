// Array of current users
let Current_users = ["Anum", "Noor", "Areeba", "Saba", "Hina"];

// Array of new users
 let new_users = ["Ali", "Ahmed", "Noor", "Saba", "areeba", "Ather"];

 // Loop through new_users to check for users name availability
 new_users.forEach(new_one_user => {

    // Making a condition for username already asist and save in our_condition variable
   let our_condition =Current_users.some(Current_one_user => Current_one_user.toLowerCase() === new_one_user.toLowerCase())

   // print Different messages using if_Eise statements
   if(our_condition){
    console.log(`Sorry ${new_one_user}  is already taien!`);
    
   }else{
       console.log(`this username ${new_one_user} is  available`)
   }

})