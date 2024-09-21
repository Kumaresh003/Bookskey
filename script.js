// + add function

var add = document.getElementById("add");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");

add.addEventListener("click", function () {
    overlay.style.display = "block";
    popup.style.display = "block";
})

// cancel btn

var cancel = document.getElementById("cancel");
cancel.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    popup.style.display = "none";
})

//add btn function

var addbook = document.getElementById("add-book");
var bookname = document.getElementById("book-name");
var bookauther = document.getElementById("book-auther");
var description = document.getElementById("description");
var container = document.querySelector(".container");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book");
    div.innerHTML = `<h2>${bookname.value}</h2>
            <h5>${bookauther.value}</h5>
            <p>${description.value}</p>
            <button onclick="remove(event)">Delete</button>`;
    container.append(div);
    bookname.value = "";
    bookauther.value = "";
    description.value = "";
    overlay.style.display = "none";
    popup.style.display = "none";
})

// delete function

function remove(event){
    event.target.parentElement.remove();
}

