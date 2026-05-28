## Iteration

Oftentimes, while writing a program, we need to repeat a set of instructions multiple times. While in some cases, we could simply copy the same code multiple times, programming languages provide a more efficient way to do this: loops. Loops are statements that allow us to repeat, or iterate, over a block of code, often checking whether to continue looping based on a boolean condition.

A major advantage of using loops is that, aside from reducing the duplication of code, they allow us to repeat code an indefinite number of times. In other words, if we know we need to repeat some code multiple times, but don't necesarily know the necessary number beforehand, a loop can be employed.

## While Loops

**While loops** are used to repeat a block of code as long as a specified condition is true:

```js
while (booleanCondition) {
    // code to be executed
}
```

As we can see, a while loop has a similar structure to an if statement. At the start of each iteration of the loop, the boolean condition will be checked, and if it is true, the code in the loop will run. The only difference from an if statement is that upon reaching the end of the loop code, we go back to the top of the loop and check the condition again, and repeat this process until the condition is evaluated to be false.

Here's a simple example of a while loop in action:

```js
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

In this example, we have a variable called count which we use to keep track of the number of iterations the loop has gone through. We can then use that number to constrain the loop to a certain number of iterations.

### Indefinite Loops

Since while loops accept a boolean as a condition for execution, we can simply provide the boolean `true` to create an indefinite loop. This loop will continue to iterate infinitely, unless it is explicitly stopped.

```js
while (true) {
    // code to be executed
}
```

Indefinite loops are useful when we want code to repeat until a certain condition is met. For example, in video game development, we want the game-loop to continue running until the player loses, wins, or quits the game. We can manually end the loop by using the `break` statement, which immediately exits the loop when executed:

```js
while (true) {
    // code to be executed
    if (someCondition) {
        break;
    }
}
```

Here, our loop repeats forever, but if `someCondition` ever becomes true, we break out of the loop.

### Continue Statement

The `continue` statement is used to skip the rest of the code inside a loop for the current iteration and move on to the next iteration:

```js
while (condition) {
    if (someCondition) {
        continue;
    }
    // code to be executed
}
```

In this example, if `someCondition` is true, the `continue` statement will skip the rest of the code inside the loop for that iteration and move on to the next iteration.

This is useful when we want to skip parts or all of a loop iteration. For example:

```js
let count = 0;
while (count <= 5) {
    count++;
    if (count % 2 === 0) {
        continue;
    }
    console.log(count);
}
```

In this example, if a number is even, the `continue` statement will skip the rest of the code inside the loop for that iteration and move on to the next iteration. The result is that only the odd numbers less than or equal to 5 will be logged to the console.

## For Loops

**For loops** are another type of loop that is often used when the number of iterations is known beforehand. A for loop has the following syntax:

```js
for (initialization; condition; update) {
    // code to be executed
}
```

In a for loop, we have three main components: the **initialization**, the **condition**, and the **update**.

- **Initialization**: This is where we initialize any variables that we want to use in the loop. This code is executed **only once** at the beginning of the loop.
- **Condition**: This is a boolean expression that is evaluated before each iteration of the loop. If the condition is true, the code inside the loop will be executed. If it is false, the loop will terminate.
- **Update**: This is where we update any variables that we want to change after each iteration of the loop. This code is executed at the end of each iteration, after the code inside the loop has been executed.

The following is an example of a for loop in action:

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

In the above example, we have a for loop with an initialization of `let i = 0`, a condition of `i < 5`, and an update of `i++`. What this means is that the loop will start with `i` equal to 0, and will continue as long as `i` is less than 5. After each iteration, the value of `i` will be incremented by 1. Effectively, we have recreated our previous while loop example in the form of a for loop.

### For ... of Loops

There are variants of the for loop syntax, one of which is the `for ... of` loop. This loop is used to iterate over the values of **iterable objects**. An example of an iterable object that we've seen before is strings. A string consists of a number of characters, and we can use a `for ... of` loop to iterate over each character of a string. For example:

```js
const word = "hello";
for (const char of word) {
    console.log(char);
}
```

Here, we iterate over each character of the string "hello" and log it to the console.
