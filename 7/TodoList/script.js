// Falsey detection
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

// Check if an element is empty -> hide elements
function isEmpty() {
    if (isBlank(document.getElementById("element_list").innerHTML.trim())) {
        document.getElementById("element_list").style.display = "none";
        document.getElementById("delete_all").style.display = "none";
    } else {
        document.getElementById("element_list").style.display = "block";
        document.getElementById("delete_all").style.display = "block";
    }
}


function newElement() {
    let inputValue = document.getElementById("inputText").value;
    let li = document.createElement("li");
    let textInput = document.createTextNode(inputValue);
    li.appendChild(textInput);

    if (isBlank(inputValue)) {
        alert("Blank input");
        console.log("Blank input");
    } else {
        // Append inputValue to the top of the list
        let theFirstChild = document.getElementById("element_list").firstChild;
        document.getElementById("element_list").insertBefore(li, theFirstChild);
    }
    document.getElementById("inputText").value = "";
    isEmpty();
}

// "Add" button
let input = document.getElementById("inputText");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("add_button").click();
    }
});

// Click to remove elements
const ul = document.querySelector('#element_list');
ul.addEventListener('click', function (event) {
    this.removeChild(event.target);
    console.log(document.getElementById("element_list").innerHTML.trim());
})

// "Delete All" button
function deleteAll() {
    document.getElementById("element_list").innerHTML = "";
    isEmpty();
}