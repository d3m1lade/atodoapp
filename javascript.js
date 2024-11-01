// variables: to store a variable, you have to do a variable declaration

//let amountBalance = `mahmud akinbami`
// don't start a variable declaration with uppercase letter or number

//let fullname = `mahmud akinbami`
//console.log(fullname)

//another way to declare

//const age=40
//let country = "United Kingdom"

//whatever you store with a "const" variable declaration, it can not change over time 

//another way

//var country = "United Kingdom"
//console.log(country)

//let fullname = `mahmud akinbami`
//fullname = "ola akiniyi"
//console.log(fullname)

//let age = 40
//console.log(age)

//let country = "United Kingdom"
//console.log(country)

//arithmetic 
let x = 10
let y = 10

//increment operator
let cartItems = 0
cartItems++
console.log(cartItems)


//decrement operation
let newcartitems = 8
newcartitems--
console.log(newcartitems)

//addition assignment operation 
let totalAmount = 100
totalAmount += 20
console.log(totalAmount)

//substraction assignment operation

let totalPrice = 100
totalPrice -= 20
console.log(totalPrice)

//multiplication assignment operation
let miles = 10
miles *= 28
console.log(miles)

//division assignment operation

let distance = 10
distance /= 28
console.log(distance)

let total = 10+10+(2+2)
console.log(total)


//comparison operation
let lessthan = 20 <= 20
console.log(lessthan)

// not equal operation
let result = 20 != 20
console.log(result)

//only strings go into double quotes or backstring. numbers don't go into double quotes or backstring.


//maths objects to round up
let roundedup = Math.ceil(5.3)
console.log(roundedup)

//math objects to round down
let roundedDown = Math.floor(5.3)
console.log(roundedDown)

//math objects to round anylevel
let rounded = Math.round(10.4)
console.log(rounded)

//to pick highest number
let maxtool = Math.max(10,23,2,62,68,27,252,27,27)
console.log(maxtool)


//to pick lowest number
let scoreformary = 2
let scoreforjohn = 84
let scoreforjoshua = 98
let scorefortolu = 100
let scoreformahmud =83

let highestscore = Math.max(scoreformary,scoreforjohn,scoreforjoshua,scorefortolu,scoreformahmud)
//console.log(highestscore)


//to generate a random number 
let rand = Math.random()
//console.log(rand)


//to generate a random number between 0 and100

let randomnumber = Math.floor(Math.random()*10000)
let roundedrandomnumber = Math.floor(randomnumber)
//console.log(roundedrandomnumber)


//to change a number to a string
let age = "40"
age = Number(age)
//console.log(typeof age)


//to change string into number
let aged = 50
age = String(aged)
//console.log(typeof aged)

// variables store 2 things 
// the first is the value 
// the second is the data type

let firstitemprice = 100
let seconditemprice = 200


let finalPrice = firstitemprice + seconditemprice
console.log(finalPrice)  

let oneitemprice = prompt(`Enter first item Price`)

let twoitemprice = prompt(`Enter Second Item Price`)

let unoitemprice = Number(oneitemprice)
let doitemprice = Number(twoitemprice)

let mainprice = unoitemprice + doitemprice
console.log(oneitemprice)
console.log(twoitemprice)
//console.log(mainprice)

//function 

function calculateAverage(){
    let firstIncome = prompt("Enter Your First Income")
    let secondIncome = prompt("Enter Your Second Income")
    let thirdIncome = prompt("Enter Your Third Income")

    let stringone = Number(firstIncome)
    let stringtwo = Number(secondIncome)
    let stringthree = Number(thirdIncome)


    let incomeAverage = (stringone + stringtwo +stringthree) / 3
    console.log(incomeAverage)
}

calculateAverage()


/* use keep calling a function repeatedly*/
function printmyname( ){
    console.log("demi")
}

printmyname()

printmyname()

/* how to use return function */

function namess(){
    let names1 = `demi`
    let names2 = `olu`
    let names3 = `jo`
    
    return names3
}
console.log(namess())

/* object literals*/

let people1 = {
    firstname: `demi`,
    lastname: `olu`,
    age: 40,
    nigerian: true,
}


console.log(people1)


let people2 = {
    firstname: `joy`,
    lastname: `david`,
    age: 40,
    nigerian: true, 
}
console.log(people2) 

let purchaseRecords = {
    customerName : "Ibinabo",
    methodOfPayment : "card",
    paymentAmount : 1000,
    priceOfItemOne : 700,
    priceOfItemTwo : 300,
    paymentStatus : true

}

console.log(purchaseRecords)

//methods- This is putting a function in an object liberal//

let people3 = {
    firstname: `demi`,
    lastname: `olu`,
    age: 40,
    nigerian: true,
}

let results = people3.age
console.log(results)


let customerDetails = {
    customerName : "joseph",
    customerID : 5729,
    customerlocation : "lagos",
    lastpaidamount : 700,
    isCustomerOwing : true
}
let amountss = customerDetails.lastpaidamount
console.log(amountss)

//Object literal nesting//

let laptop = {
    laptopName: `hp`,
    laptopColour: `blue`,
    laptopType: `pavilion`,
    laptopYear: 2005,
    screen: {
        size: 1550,
        tint: false,
    }
}

console.log(laptop.screen.tint)

//object methods//

const studentRecords = {
    studentName : `ali`,
    studentNumber: 1234,
    studentAge : 20,
    yearOfAdmission : 2000,
    yearOfGraduation : 2004,
    firstYearScore: 90,
    secondYearScore: 80,
    thirdYearScore: 70,
    fourthYearScore: 60,
    studentLocation : `lagos`,
    isStudentOwing : true,
    isStudentEnrolled : true,
    averageScore : function(){
        let averageScore = (this.firstYearScore + this.secondYearScore + this.thirdYearScore + this.fourthYearScore) / 4

        return averageScore
    }
    
}
let finalscore = studentRecords.yearOfGraduation
console.log(results)


//object liberals// 

const car = {
    brand : "toyota",
    model : "camry",
    currentyear : 2024,
    year : 2022 ,
    color : "blue",

    ageofcar : function(){
        return this.currentyear - this.year
    }
}

car.color


const house = {
    color : "gray",
    room : "5",
    size : "350sqm",
    houseDescription : function(){
        let description = `the house is cool, the color is ${color},`

        return house.housedescription
    }
}

let finalanswer = house.houseDescription
console.log(finalanswer)
//=======================concatination======================//
let (city) = "London"
let (country) = "USA"

let sentence = `I love in ${city} in a country called ${country}`



let home = {
    address : "123 broad street",
    noOfBedrooms : 8,
    noOfBathroom : 8,
    garage : {
        capacityofCars : 9,
        automaticdoors : true,
        hastools : true,
        colorOfGarage : "yellow",
        aquarium : {
            numberOfFish : 20,
            electric : true,
            height: "40cm",
        }
    }
}

const end = home.garage.height
console.log(end)


//Elseif

let userAge = prompt("Enter your age")
userAge = Number(userAge)

if(userAge > 0 && userAge <=12 ){
    console.log(" User is a Toddler")
}else if(userAge < 12 && userAge <=18 ){
    console.log("User is a teenager")
}else if(userAge > 18 && userAge <=64 ){
    console.log("User is an adult")
}else if(userAge < 64 && userAge <=150){
    console.log("User is a senior citizen")
}

const container = document.getElementById("container")  
container.querySelector("#heading")
console.log(heading)

//remove attribute

let heading = document.getElementById("container")
container.removeAttribute("class")