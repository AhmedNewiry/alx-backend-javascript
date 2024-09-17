// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Handle input from stdin (standard input)
process.stdin.on('data', (input) => {
  // Trim the input and display the user's name
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);

  // Close the process and display the exit message
  console.log("This important software is now closing");

  // End the process
  process.exit();
});

