let  Name_1 : string = "Noorjahan"
let  Name_2 : string = " Muhammed Saeed"
let  Name_3 : string = "Anum"

// Equal string
if (Name_1 == Name_3) {
    .log("namws are equal")
} else {
    console.log("names are not equal")
}

// inequal string
if (Name_1 != Name_2) {
    console.log(" names are equal")
} 

// lower case function
 if(Name_1 != Name_3) {
    console.log("names are  equal")
}

// Numerical text
let age_1 : number = 18
let age_2 : number = 22

if (age_1 == 18) {
    console.log("eligibale for vote")
 }

if (age_1 != 22) {
    console.log("eligibale for vote in older category")
}

// Less than
if(age_1 <= age_2) {
    console.log("younger")
}

// Greater than
if(age_2 >= age_1) {
    console.log("older")
}

 if (age_1 == 18 && age_2 == 22 ) {
    console.log(" person is eligibale for vote")
}

// operators
if (age_1 == 18 || age_2 != 22 ) {
        console.log(" person is eligibale not for vote")
    }

// text whether
let country :string [] = ["Pakistan", "china", "Japan", "india"]
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list")
}

// Text whether an item is not in a array
if (!country. includes ("america")) {
    console.log("america is not inlude in an array")
}

        



