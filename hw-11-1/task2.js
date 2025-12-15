function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch todo");
      }
      return response.json();
    });
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      return response.json();
    });
}

// --- Використання then/catch ---
fetchTodo()
  .then((todo) => {
    console.log("Todo:");
    console.log(todo);
  })
  .catch((error) => {
    console.log("Todo error:", error.message);
  });

fetchUser()
  .then((user) => {
    console.log("\nUser:");
    console.log(user);
  })
  .catch((error) => {
    console.log("User error:", error.message);
  });

  // --- Promise.all and Promise.race ---

const allResult = Promise.all([fetchTodo(), fetchUser()]);
allResult
  .then(([todo, user]) => {
    console.log("\nPromise.all result:");
    console.log("todo:", todo);
    console.log("user:", user);
  })
  .catch((error) => {
    console.log("Promise.all error:", error.message);
  });

const raceResult = Promise.race([fetchTodo(), fetchUser()]);
raceResult
  .then((winner) => {
    console.log("\nPromise.race result (winner):");
    console.log(winner);
  })
  .catch((error) => {
    console.log("Promise.race error:", error.message);
  });

