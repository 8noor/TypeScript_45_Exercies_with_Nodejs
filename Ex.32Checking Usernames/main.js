// Array of current users
var Current_users = ["Anum", "Noor", "Areeba", "Saba", "Hina"];
// Array of new users
var new_users = ["Ali", "Ahmed", "Noor", "Saba", "areeba", "Ather"];
// Loop through new_users to check for users name availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already asist and save in our_condition variable
    var our_condition = Current_users.some(function (Current_one_user) { return Current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print Different messages using if_Eise statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, "  is already taien!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is  available"));
    }
});
