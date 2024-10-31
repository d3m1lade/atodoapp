const form = document.getElementById("form");
const toDo = document.getElementById("todo-input");
const todoItemContainer = document.getElementById("todo-item-container");
const button = document.getElementById("button");  // Get the button element

let dataOfArray = [];
let editIndex = null;  // Tracks the index of the item being edited (if any)

form.addEventListener("submit", collectTodo);

function collectTodo(event) {
    event.preventDefault();

    let toDoValue = toDo.value;

    if (toDoValue.length === 0) {
        alert("Enter a task");
    } else {
        if (editIndex !== null) {
            dataOfArray[editIndex].toDoEntered = toDoValue;
            editIndex = null;

            button.innerHTML = "Add To-Do";  // Reset button text to "Add To-Do"

            // Remove highlight after editing
            document.querySelectorAll('.todo-item').forEach(item => item.classList.remove('highlight'));
        } else {
            const objectLiteral = {
                toDoEntered: toDoValue,
                completed: false
            };
            dataOfArray.push(objectLiteral);
        }

        localStorage.setItem("To-Do", JSON.stringify(dataOfArray));

        form.reset();  // Reset the form
        fetchToDoItems();  // Re-fetch and display the updated list
    }
}

function fetchToDoItems() {
    if (localStorage.getItem("To-Do")) {
        dataOfArray = JSON.parse(localStorage.getItem("To-Do"));
    }
    showUntoUI();
}

function showUntoUI() {
    todoItemContainer.innerHTML = "";  // Clear the container to prevent duplication

    dataOfArray.forEach(function (items, index) {
        let toDoItemDiv = document.createElement("div");
        toDoItemDiv.classList.add("todo-item");
        toDoItemDiv.setAttribute("id", `${index}`);

        let leftSideDiv = document.createElement("div");
        leftSideDiv.classList.add("left-side");

        let uncheckedIcon = document.createElement("i");
        uncheckedIcon.classList.add("fa-regular", "fa-circle");
        uncheckedIcon.setAttribute("data-action", "check");

        let checkedIcon = document.createElement("i");
        checkedIcon.classList.add("fa-solid", "fa-circle-check");
        checkedIcon.setAttribute("data-action", "check");

        let paragraphElement = document.createElement("p");
        paragraphElement.textContent = items.toDoEntered;
        paragraphElement.setAttribute("data-action", "check");

        let rightSideDiv = document.createElement("div");
        rightSideDiv.classList.add("right-side");

        let editIcon = document.createElement("i");
        editIcon.classList.add("fa-solid", "fa-pen");
        editIcon.setAttribute("data-action", "edit");

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-solid", "fa-trash");
        deleteIcon.setAttribute("data-action", "delete");

        if (items.completed === false) {
            leftSideDiv.append(uncheckedIcon, paragraphElement);
        } else {
            leftSideDiv.append(checkedIcon, paragraphElement);
        }

        rightSideDiv.append(editIcon, deleteIcon);
        toDoItemDiv.append(leftSideDiv, rightSideDiv);
        todoItemContainer.append(toDoItemDiv);
    });
}

todoItemContainer.addEventListener("click", targetToDoItem);

function targetToDoItem(event) {
    let userTarget = event.target;
    let grandParentElement = userTarget.parentElement.parentElement;

    if (!grandParentElement.classList.contains("todo-item")) return;

    let toDoID = Number(grandParentElement.id);
    let clickedAction = userTarget.dataset.action;

    if (clickedAction === "check") {
        checkAToDoItem(toDoID);
    } else if (clickedAction === "delete") {
        deleteAToDoItem(toDoID);
    } else if (clickedAction === "edit") {
        editAToDoItem(toDoID);
        toDo.style.border = "1px solid blue";  // Optional styling for edit mode
    }
}

function checkAToDoItem(ID) {
    dataOfArray = dataOfArray.map(function (item, index) {
        if (index === ID) {
            return {
                toDoEntered: item.toDoEntered,
                completed: !item.completed  // Toggle the completed status
            };
        } else {
            return item;
        }
    });

    localStorage.setItem("To-Do", JSON.stringify(dataOfArray));
    fetchToDoItems();  // Re-fetch and display the updated list
}

function deleteAToDoItem(ID) {
    dataOfArray = dataOfArray.filter(function (item, index) {
        return index !== ID;
    });

    localStorage.setItem("To-Do", JSON.stringify(dataOfArray));
    fetchToDoItems();  // Re-fetch and display the updated list

    form.reset()
    button.innerHTML = "Add To-Do"
    toDo.style.border = "1px solid Grey"
}

function editAToDoItem(ID) {
    toDo.value = dataOfArray[ID].toDoEntered;  // Set input field to the current to-do value
    editIndex = ID;  // Set the editIndex to the ID of the item being edited
    button.innerHTML = "Update To-Do";  // Change the button text to "Update To-Do"

    // Remove any previous highlights
    document.querySelectorAll('.todo-item').forEach(item => item.classList.remove('highlight'));

    // Add highlight to the item being edited
    let currentItem = document.getElementById(`${ID}`);
    currentItem.classList.add('highlight');
}

// Activate the function on page load to fetch existing to-do items
fetchToDoItems();
