async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }

  return await response.json();
}

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return await response.json();
}

async function run() {
  try {
    const [todo, user] = await Promise.all([
      fetchTodo(),
      fetchUser(),
    ]);

    console.log("Promise.all result:");
    console.log("todo:", todo);
    console.log("user:", user);
  } catch (error) {
    console.log("Promise.all error:", error.message);
  }

  try {
    const winner = await Promise.race([
      fetchTodo(),
      fetchUser(),
    ]);

    console.log("\nPromise.race result (winner):");
    console.log(winner);
  } catch (error) {
    console.log("Promise.race error:", error.message);
  }
}
run();

