const hexadecimalNumberSystem = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]

console.log(hexadecimalNumberSystem)

let button = document.getElementById("button")

function generateRandomNumber() {
    let randomNumber =  math.floor(Math.random() * hexadecimalNumberSystem.length)
    console.log(randomNumber)
}


button.addEventListener("click", function() {
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++) {
      hexadecimalNumberSystem
    }
})

