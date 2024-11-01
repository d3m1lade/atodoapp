//variables

const hexadecimalNumberSystem = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("color-container-1")
let firstHexCode = document.getElementById("color-code-1")
let secondColorBox = document.getElementById("color-container-2")
let secondHexCode = document.getElementById("color-code-2")
let thirdColorBox = document.getElementById("color-container-3")
let thirdHexCode = document.getElementById("color-code-3")
let fourthColorBox = document.getElementById("color-container-4")
let fourthHexCode = document.getElementById("color-code-4")
let fifthColorBox = document.getElementById("color-container-5")
let fifthHexCode = document.getElementById("color-code-5")
let sixthColorBox = document.getElementById("color-container-6") 
let sixthHexCode = document.getElementById("color-code-6")
let seventhColorBox = document.getElementById("color-container-7")
let seventhHexCode = document.getElementById("color-code-7")


//to generate 6 random numbers
function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length) 
    return randomNumber
}


//to generate the first color code
button.addEventListener("click", function(){
    let hexCodeForFirstBox = "#" //
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumber()]//first color code
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

    

})


// to generate the second color code
button.addEventListener("click", function(){
    let hexCodeForSecondBox = "#"
    for(let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox

})

// to generate the third color code
button.addEventListener("click", function(){
    let hexCodeForThirdBox = "#"
    for(let myThirdLoop = 0; myThirdLoop < 6; myThirdLoop++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox

})

// to generate the fourth color code
button.addEventListener("click", function(){
    let hexCodeForFourthBox = "#"
    for(let myFourthLoop = 0; myFourthLoop < 6; myFourthLoop++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fourthColorBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.textContent = hexCodeForFourthBox

})

// to generate the fifth color code
button.addEventListener("click", function(){
    let hexCodeForFifthBox = "#"
    for(let myFifthLoop = 0; myFifthLoop < 6; myFifthLoop++){
        hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fifthColorBox.style.backgroundColor = hexCodeForFifthBox
    fifthHexCode.textContent = hexCodeForFifthBox

})

// to generate the sixth color code
button.addEventListener("click", function(){
    let hexCodeForSixthBox = "#"
    for(let mySixthLoop = 0; mySixthLoop < 6; mySixthLoop++){
        hexCodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    sixthColorBox.style.backgroundColor = hexCodeForSixthBox
    sixthHexCode.textContent = hexCodeForSixthBox

})


// to generate the seventh color code
button.addEventListener("click", function(){
    let hexCodeForSeventhBox = "#"
    for(let mySeventhLoop = 0; mySeventhLoop < 6; mySeventhLoop++){
        hexCodeForSeventhBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    seventhColorBox.style.backgroundColor = hexCodeForSeventhBox
    seventhHexCode.textContent = hexCodeForSeventhBox

})