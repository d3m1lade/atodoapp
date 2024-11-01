//DOM MANIPULATION
    //text content properties
                    //const paragraph = document.getElementById("lorem");
                    //paragraph.textContent = "Annoucement has been made";

    //inner text
                    //const paragraph = document.getElementById("text-container");
                    //paragraph.innerText = " innertext Annoucement has been made";

                    //always use text- content, dont use inner text

    //inner html

                    //const container = document.getElementById("title");
                    //container.innerHTML = "<button> Annoucement has been made</button>";

    //get attributes
                    //const container = document.getElementById("title");
                    // const attribute = container.getAttribute("class")
                    // console.log(attribute); //prints class name

    //set attributes
                    //const container = document.getElementById("title");
                    //container.setAttribute("Id", "title1");
                    // the first thing in the bracket is for the element you want to change and the second thing in the bracket is what you want to change the element into

            // what if the element doesn't have a class name 
                    //const container = document.getElementById("title")
                    //container.setAttribute("Id", "title2")

    //create element

                    //const paragraph = document.createElement("p");
                    //paragraph.textContent = "This is a new paragraph";
                    //set attributes 
                    //paragraph.setAttribute("id", "new-paragraph");
                    //paragraph.setAttribute("class", "new-paragraph-class");

    //to add the attributes into the html
                   // const container = document.getElementById("title");
                   // container.appendChild(paragraph);
                   // console.log(paragraph);

    //to select a container 
                    //const container =  document.getElementById("container");
                    //const heading = container.querySelector("#heading")
                    //console.log(heading);

    //to remove attribute from elements
                    //const container = document.getElementById("container");
                    //container.removeAttribute("class");
                    //console.log(container);

    // to work on css style from javascript
                    //const container = document.getElementById("container");
                    //container.style.backgroundColor = "yellow";
                    //container.style.color = "blue";
                    //container.style.border = "1px solid black";

    //to join static and dynamic data
                    //const date = document.getElementById("container");
                    //const todaysDate = `9th of August, 2010` 
                    //date.textContent += `${todaysDate}`

    //Event- it is use to record any event and make a response
                    //let button = document.getElementById("button");
                    //let paragraph = document.getElementById("paragraph");
                    //button.addEventListener("click",  function(){
                        //paragraph.textContent = "Spanish or English"
                    //})


    // DOM traversing 
         //elements traversing
                    //const container = document.getElementById("firstparagraph");
                    //const parent = container.parentElement
                    //console.log(parent)

        //grandparents
                    //const grandparents = parent.parentElement
                    //console.log(grandparents)

        //siblings
                    //const container = document.getElementById("firstparagraph")
                    //const siblings = container.nextElementSibling
                    //console.log(siblings)

        //children
                    //there is also previousElementSibling element too, as well as children by calling it .children{0} to select the child you want to select. if you want to select all the children, you dont need the length no. of children.

        //nodes traversing
                    //const container = document.getElementById("container")
                    //const nodes = container.childNodes
                    //console.log(nodes)
        
        //classlist: it allows us to manipulate a class to an element
                    //const heading = document.getElementById("heading")
                    //const response = heading.classList.contains("heading")
                    //console.log(response)

                     //add class
                     //heading.classList.add("mahmud")

                     //remove class
                     //heading.classList.remove("heading")

                    //toggle class
                     //heading.classList.toggle("mahmud")

                    //const  button = document.getElementById("btn");

                    //button.addEventListener("click", function(event){
                    //    if (button.classList.contains("btn-1")){
                    //       button.classList.remove("btn-1");
                    //        button.classList.add("btn-2");
                    //    }else{
                    //        (button.classList.replace("btn-2"))
                    //    }
                   // })
                  
        //Capturing data from a form field
                    const postTextArea = document.getElementById("post");
                    const nameInputField = document.getElementById("username");
                    const form = document.getElementById("form");
                    const finalPostContainer = document.getElementById("posts-container");

                    let arrayOfPosts = []// we put the array of posts outside the function cause it will be called often and variables are hard to call in curly brackets

                    form.addEventListener("submit",function(event){
                        event.preventDefault(); //1. prevent  default behavior of a form of not saving data
                        let userName = nameInputField.value; //to collect the value of the name field
                        let userPost = postTextArea.value;  //to collect the value of the post

                        //2.combine both data into one object literal
                        let userPostRecord = {
                            postUserName: userName,
                            postUserPost: userPost
                        }
                        

                        //3.then create an array of object literals
                        //create the array outside first 
                        arrayOfPosts.push(userPostRecord)// after creating then push the array to the end to allow multiple objects to be posted together




                        //1.reset the form fields after posting
                        form.reset();
                        printToTheUI()  //4. to show  array of objects in the console log
                    }
                )

                        //4. then collect the data from the array of posts and add them to front end design
                        function printToTheUI(){
                            finalPostContainer.innerHTML = ""; //6. to clear the previous posts before printing new ones
                            arrayOfPosts.forEach(function(item){
                                let itemUserName = item.postUserName
                                let itemUserPost = item.postUserPost


                                let postElement = document.createElement('h3')
                                postElement.textContent = itemUserPost

                                let usernameElement = document.createElement('p')
                                usernameElement.textContent = itemUserName


                                finalPostContainer.append(postElement,usernameElement);//5 print to the ui
                        })
                        }
