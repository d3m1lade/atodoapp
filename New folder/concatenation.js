//capture data from form field 

const post = document.getElementById("name");
const forms = document.getElementById("form");
const textarea = document.createElement("ui-container");

let arrayOfNames = [];


forms.addEventListener("submit", function(event) {
    event.preventDefault();
    let userName = post.value;// to collect the data from user input

    //turn data into object literal
    const userPost = {
        nameOfUser : userName
    } 
    form.reset();
    arrayOfNames.push(userPost); // add object to array
    printToTheUI() //call the print function from the array to an object literal

})

//collect data from the array of post, and add them to the ui with the text(welcome ) before the user name

function printToTheUI () {
    arrayOfNames. forEach(function(item) {
         let postUser = item.nameOfUser
         
         let newParagraph = document.createElement("p");
         newParagraph.textContent =    `Welcome   ${postUser}`
         textarea.appendChild(newParagraph);
    });
}

