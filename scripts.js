"use strict";

const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.querySelector(".todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});

function addToDo() {
  const todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerHTML = todoText;
    todos.appendChild(todoEl);
    input.value = "";
    updateLS();

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
  }
}

function updateLS() {
  const todoEl = document.querySelectorAll("li");
  const todos = [];

  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
