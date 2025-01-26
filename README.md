# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  Specifically, the `/users/:id` route fails to handle cases where `req.params.id` is not a valid user ID.

## Bug

The `bug.js` file shows a route handler that doesn't handle potential errors.  If an invalid `userId` is provided, the application might crash or return an unexpected error.

## Solution

The `bugSolution.js` file demonstrates how to add proper error handling using try-catch blocks to gracefully handle invalid inputs.