let input = document.querySelector(".input-form");
let show = document.querySelector("#list");

// Clear
function clear() {
    input.value = "";
}

// Add
let tasks = JSON.parse(localStorage.getItem("Tasks")) || [];

function Add() {
    let valid = true;
    if (input.value == "") {
    valid = false;
    }
    if (valid) {
    let task = {
        text: input.value,
        done: false, 
    };
    tasks.push(task);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    Print();
    clear();
    } else {
    alert("Please Fill The Field");
    }
}

// Print
function Print() {
    show.innerHTML = "";
    tasks.forEach((element, index) => {
    show.innerHTML += `
                <ul id="list">
                    <li id="task-${index}" class="${element.done ? "danger" : ""}">${element.text}</li>
                </ul>    
                <div class="btn-container">
                    <button class="check btn" onclick="check(${index})">Done</button>
                    <button class="delete btn" onclick="Delete(${index})">X</button>
                </div> `;
    });
}

// Check
function check(index) {
    tasks[index].done = true; 
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    Print();    
}



// Delete
function Delete(index) {
    tasks.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    Print();    
}

Print();