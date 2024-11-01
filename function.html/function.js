// create a function that says hello to any user that submits their name.

function sayHello(userName, location){
    let greeting = `hello ${userName}, how is ${location} today?`
    console.log(greeting)
}

sayHello("tim")

sayHello("jane", "New York")


//create a function that identifies the lowest score amongst 5 scores

function minimumScore(score1, score2, score3, score4, score5){
   let minimum = Math.min(score1, score2, score3, score4, score5)
   console.log(minimum)
}

minimumScore(31, 37, 37, 35, 37)

//create a function that collects the favourite vacation city of  a user
//rest parameters are paramaters that will collect more than one value,just add 3dot signs to it
function vacationCity(userName, ...vacationCities){
    let answer =   `hey ${userName}, your favourite vacation cities are ${vacationCities}`
    console.log(answer)
}

vacationCity("mahmud", "rome", "london", "lisbon", "moscow", "accra")

//create a function that collects ice-cream orders and print the order for the ice-cream chef

function iceCreamOrder(customerName, customerAddress, cupSize, flavour1, flavour2, ...toppings){
    let order = `A customer with name ${customerName} and address ${customerAddress} has the following order: with the ${cupSize} as the cupsize and the flavours ${flavour1} and ${flavour2} with ${toppings}as the toppings`
    console.log(order)
}

iceCreamOrder("mahmud", "25 college avenue,gillingham", "verylarge", "vanilla", "chocolate", "oreos", "m&m", "rainbowsprinkles", "caramelsprinkles", "peanuts", "groundnuts")


//Arrays


    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
//the no of items in the array = length of the array
    let result = weekDays[3]
    console.log(result)

//unshift methods adds items to the beginning of an  array
//weekDays.unshift("freakday")
   // console.log(weekDays)

   //shift methods removes items to the beginning of an array
    weekDays.shift()
    console.log(weekDays)

    //assignment. create an array that contains 3 bank customer records
    
    const customerRecords = [
        {
            name: "mahmud",
            age: 30,
            address: "25 college avenue, gillingham",
            bankAccount: 63835933,
            balance: 5000
        },
        {
            name: "jane",
            age: 28,
            address: "12 park avenue, gillingham",
            bankAccount: 42136798,
            balance: 7000

        },
        {
            name: "tim",
            age: 35,
            address: "35 hillcrest avenue, gillingham",
            bankAccount: 98765432,
            balance: 3000
        }
    ]



   // to add a new customer record
    customerRecords.unshift(
        {
        name: "mike",
        age: 40,
        address: "45 riverside avenue, gillingham",
        bankAccount: 12345678,
        balance: 2000
    }
)

console.log(customerRecords)


//end of an array
customerRecords.pop()

console.log(customerRecords)

//push method is to add a new customer record

customerRecords.push(
    {
        name: "sarah",
        age: 32,
        address: "67 pine avenue, gillingham",
        bankAccount: 78945612,
        balance: 6000
    }
)

console.log(customerRecords)

//to remove the customer records

customerRecords.reverse()

console.log(customerRecords)

//to check if the arraw includes a record 

let check = customerRecords.includes([
    {
        name: "sarah",
        age: 32,
        address: "67 pine avenue, gillingham",
        bankAccount: 78945612,
        balance: 6000
    }
])

console.log(check)

//slice array 

 //   let sliceArray = customerRecords.slice(2, 3)

//console.log(sliceArray)

//splice array

//customerRecords.splice(1, 0,)

//console.log(customerRecords)

//
const myArray = [
    {
        name : "Joseph",
        country : "Nigeria"
    },

    {
        name : "Joan",
        country : "kenya"
    }

]
//let myresult = myArray[0]
//myresult.country

//length property

let length = myArray.length
console.log(length)


//nesting arrays

//let nestedArrayone = [
 //   ["mahmud", "ola", "ola"],
//]

let nestedArraytwo = [
    ["jane", "mike", "sarah"],
]

//let nest = [nestedArrayone, nestedArraytwo]
//console.log(nest)

//loop 

//for(let x = 0;x < 10; x++) {
//console.log(`Good Evening ${x} time(s)`)
//}



//loop through an array

let anArray = ["mahmud", "jane", "tim", "mike", "sarah"]

//for(let i = 0; i < anArray.length; i++) {
//    let x = anArray[i]
//    console.log(x)
//}

//loop through an array of twitter users 

    let users = [
        {
            name: "mahmud",
            tweets: 50,
            age : 28,
            location: "gillingham"
        },

        {
            name: "jane",
            tweets: 30,
            age : 30,
            location: "london"
        },

        {
            name: "tim",
            tweets: 20,
            age : 35,
            location: "manchester"
        },

        {
            name: "mike",
            tweets: 40,
            age : 25,
            location: "new york"
        },

        {
            name: "sarah",
            tweets: 60,
            age : 27,
            location: "birmingham"
        }
    ]

 //   for(let x = 0; x < users.length; x++){
 //       let user = users[x]
 //       console.log(`${user.name} has ${user.tweets} tweets and is from ${user.location}`)
 //   }

    //foreach method 



    let citiesElement = document.getElementById("Cities")
    const bacicArray = ["lisbon", ]

    //strings properties and strings methods


    //conditionals for a single case comparison
  //  let userAge = prompt("Enter your age")
   // let agreedAge = 21
   // if(userAge >= agreedAge){
   //     console.log("Welcome to the club")
  //  }else{
   //     console.log("You are not allowed to enter the club")
   // }

        //conditionals for a double case comparison
    //    let usersAge = prompt("Enter your age")
    //    let userCity = prompt("Enter your city")
    //    let passAge = 21
     //   let agreedCity = "gillingham"

     //   if(usersAge >= passAge && userCity === agreedCity){
     //       console.log("Welcome to the club")
     //   }else{
      //      console.log("You are not allowed to enter the club")
      //  }

        //for "or"

     //   if(usersAge >= passAge || userCity === agreedCity){
     //       console.log("Welcome to the club")
     //   }else{
     //       console.log("You are not allowed to enter the club")
     //   }

            //conditionals for a single case comparison using ternary operator

//let x = 1
//let y = 3
//let a = 5
//let b = 4

//if( x > y && a > b ){
    //console.log("YES")
//}else{
//    console.log("NO")
//}

//or 

//x > y && a > b ? console.log("YES") : console.log("NO")

//Elseif

//let userAge = prompt("Enter your age")
//userAge = Number(userAge)

//if(userAge > 0 && userAge <=12 ){
   // console.log(" User is a Toddler")
//}else if(userAge < 12 && userAge <=18 ){
//    console.log("User is a teenager")
//}else if(userAge > 18 && userAge <=64 ){
 //   console.log("User is an adult")
//}else if(userAge > 64 && userAge <=150){
 //   console.log("User is a senior citizen")
//}else{
//    console.log("Invalid age")
//}

//Nested for loops

//for(x = 0; x < 10; x++){
 //   for(let y = 0; y < 10; y++){
 //       console.log(`${x} multiplied by ${y}`)
 //   }
//}

//create a multiplication table
//for(x = 1; x <= 10; x++){
  //  console.log(`Multiplication table for ${x}`)

  //  for(let y = 1; y <= 10; y++){
  //    let result = `${x} x ${y} = ${x * y}`
   //   console.log(result)
   // }
      
//}

//to check if an array is empty
//const emptyArray = ["demi", "demi", "mahmud"]
//let results = emptyArray[emptyArray.length-1]
//console.log(results)

//difference between nesting and merging arrays
//const firstarray = [1,2,3,4,5]
//const secondarray = [6,7,8,9,10]
//const thirdarray = [11,12,13,14,15]

//let nestedArray = [firstarray, secondarray]
//console.log(nestedArray)

//let mergedarray = [...firstarray, ...secondarray, ...thirdarray]
//console.log(mergedarray)
//or 
 //  let mergedArray = firstarray.concat(secondarray, thirdarray)
 //   console.log(mergedArray)

 //to split and join to covert array to a string
 //const names = ["sandra", "paul", "faraday"]
//let commaSeparatedNames = names.join()
//console.log(commaSeparatedNames)

//resultone =  commaSeparatedNames.split(",")

//console.log(resultone)

//MAP

//const pricedArray = [45.5, 45.4, 47.2, 46.9, 46.3, 36.5, 37.2]
//console.log(pricedArray)

//const data = pricedArray.map(function(item) {
 //   let resulttwo = Math.round(item)
 //   return resulttwo
//})

//console.log(data)

//FILTER METHODS

//const studentRecords = [
 //  {
 //       studentName : "Joseph",
  //      grade : 85,
 //       studentID : 83637363,
 //   },
 //   {
   //     studentName : "Joan",
     //   grade : 92,
       // studentID : 83637364,
  //  },
   // {
   //     studentName : "Mahmud",
   //     grade : 75,
   //     studentID : 83637365,
   // },
   // {
     //   studentName : "Sarah",
     //   grade : 88,
       // studentID : 83637366,
   // }

//]

//const filteredValue = studentRecords.filter(function(item) {
 //   return item.grade > 90
//})
//console.log(filteredValue)

//DOM  DOCUMENT OBJECT MODEL
//const heading = document.getElementById("heading")
//heading.textContent =  "Mahmud Akinbami"
//console.log(heading)


//to drag the tag name of an html element
const heading = document.getElementsByTagName("h1")
console.log(heading);
//avoid using

//for id
const id = document.getElementById("heading")
console.log(id);

//for class
const classes = document.getElementsByClassName("ptext")
console.log(classes);

//query selector for class
document.querySelector(".heading")

//query selector for id
document.querySelector("/id")

//text content property
const paragraph = document.getElementById("lorem")
paragraph.textContent = 'mahmud akinbami'
