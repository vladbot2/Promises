const usersList = document.getElementById('usersList');
const todosList = document.getElementById('todosList');

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const todosUrl = "https://jsonplaceholder.typicode.com/todos?userId=";

fetch(usersUrl)
  .then((response) => {
    console.log("Fetching users" + response.status);
    return response.json();
  })
  .then((users) => {
    console.log("Users fetched successfully");
    console.log(users);

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      li.onclick = () => {
        fetchTodos(user.id);
      };
      usersList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching users: " + error);
  });

function fetchTodos(userId) {
  fetch(todosUrl + userId)
    .then((response) => {
      console.log("Fetching todos" + response.status);
      return response.json();
    })
    .then((todos) => {
      console.log("Todos fetched successfully");
      console.log(todos);

      todosList.innerHTML = "";
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todosList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error fetching todos: " + error);
    });
}
