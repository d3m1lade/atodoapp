const welcomeButton = document.getElementById("button")
const theFormContainer = document.getElementById("form-container")



welcomeButton.addEventListener("click", function(){
    theFormContainer.style.display = "flex"

})


const form = document.getElementById("form")
const nameInput = document.getElementById("name-input")
const url = document.getElementById("url-input")
const description = document.getElementById("description-input")
const postsContainer = document.getElementById("Single-container")
const titleContainer = document.getElementById("title-container")
const websiteDescription = document.getElementById("bottom-container")



let arrayOfPosts = [
    {
        name : "website",
        link : "URL",
        describe : "http://www.google.com/website"
    }
]

form.addEventListener("submit",function(event){
    event.preventDefault()
    let userName = nameInput.value
    let userLink = url.value
    let userDescription = description.value


    let userRecord = {
        name: userName,
        link: userLink,
        describe: userDescription
    };


    arrayOfPosts.push(userRecord)
    form.reset()
    console.log(userRecord)
    theFormContainer.style.display ="none"
    printToTheUI()

});


const formButton = document.getElementById("form-submit")

formButton.addEventListener("submit", function(){
    theFormContainer.style.display = "none"
    printToTheUI()
})

function printToTheUI(){
    postsContainer.innerHTML = "";
    titleContainer.innerHTML = "";
    websiteDescription.innerHTML = "";

    arrayOfPosts.forEach(function(post){
        let uiUsername = post.name;
        let uiLink = post.link;
        let uiDescription = post.describe;
        


        let newParagraph = document.createElement("h5")
        newParagraph.textContent = uiUsername
    
        let newLink = document.createElement("a")
        newLink.href = uiLink
        newLink.textContent = "Visit the website"
    
        let newDescription = document.createElement("p")
        newDescription.textContent = uiDescription
    
        titleContainer.append(newParagraph);
        websiteDescription.append(newDescription);
    })
}
