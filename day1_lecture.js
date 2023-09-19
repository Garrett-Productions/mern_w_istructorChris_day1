// variables and data types

var luckyNum = 7;

var name = "Ken";

var names = ["Ken", "Garrett", "Jose", "Matt"];

const ken = {
    firstName: "Ken",
    power: "Kenergy",
    isHuman: false
};

ken.isHuman = true

console.log(ken.firstName);
console.log(names[2])

function sayHi(name) {
    console.log("Hey " + name)
};

sayHi("garrett")

for(var i = 0; i < names.length; i++){
    console.log("these is my name ",names[i])
    if(names[i] == "K"){
        console.log("Ken has Kenergy!")
    }
    else if(names[i] == "Garrett"){
        console.log("Does Garrett have kenergy? Yes it does")
    }
    else{
        console.log(names[i])
    }
}

const num1 = 7;

//Arrow Functions

// const sayHi = (name) => {
    //     console.log(name)
    // }
ken.age = 35
console.log(ken.isHuman)

//Destructuring variables

var names = ["ken", "garrett", "jose", "matt"]
const [, name2, name3, name4] = names

console.log(name2)

let arr1 = [1,2,3]
let arr2 = [4,5,6]

let comboArr = [...arr1, arr2]
console.log(comboArr)
let comboArr2 = [...arr1, ...arr2]
console.log(comboArr2)
