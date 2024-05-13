const todoListe = document.getElementById("todoListe");

function ladeTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {
      todos.forEach((todo) => {
        erstelleTodoElement(todo);
      });
    })
    .catch((error) => console.error("Fehler beim Laden von Todos:", error));
}

function erstelleTodoElement(todo) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {});

  const todoText = document.createElement("span");
  todoText.textContent = todo.title;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Löschen";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(todoText);
  li.appendChild(deleteButton);

  if (todo.completed) {
    li.classList.add("erledigt");
  }

  todoListe.appendChild(li);
}

function fuegeTodoHinzu() {}

ladeTodos();

function fuegeTodoHinzu() {
  const neueTodoText = document.getElementById("neueTodoEingabe").value;

  if (neueTodoText.trim() === "") {
    return;
  }

  const neuesTodo = {
    title: neueTodoText,
    completed: false,
  };

  erstelleTodoElement(neuesTodo);

  document.getElementById("neueTodoEingabe").value = "";
}
