var userName = ["Anum", "Batool", "Nazia", "saba", "Admin", "Haya", "Hina"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array in empty we need to find some users!");
}
else {
    // using ForEach loop on Array
    userName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report? "));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
