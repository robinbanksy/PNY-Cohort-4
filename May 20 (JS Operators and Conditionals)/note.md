## JavaScript Operators

An operator is a symbol which indicates that a certain action should be taken, usually applied to one or more operands. For example, the mathematical addition operator `+` indicates that the two number operands it is between should be added together.

### Binary Operators

Operators are often categorized by the number of operands that they operate on. The addition operator is, for example, a binary operator, because it has two operands, the two numbers that are added together. Other examples of binary operators include:

```js
x - y       // Subtraction operator
x * y       // Multiplication operator
x / y       // Division operator
x % y       // Modulus operator; returns the remainder of division.
            //  (e.g. 11 % 2 -> 1)
```

### Unary Operators

Operators with only a single operand are called unary operators. An example of a unary operator is the logical NOT operator, `!`. The logical NOT operator takes a boolean operand and inverts its value:

```js
let bool = true;
let notBool = !bool;     // notBool will be false
```

Other examples of unary operators include the increment `++` operator and decrement `--` operator. These allow us to simply increment or decrement a number by 1:

```js
let num = 5;
num++;      // num is now equal to 6
num--;      // num is again equal to 5
```

Or the `typeof` operator, which returns the data type (number, string, or boolean) in the form of a string:

```js
console.log(typeof "Hello");      // Will print "string"
```

### Comparison Operators

Comparison operators are used to construct boolean expressions. An example we've seen is the "greater than" symbol: `>`, which is used to determine if one value is greater than a second. Other examples of comparison operators include:

```js
x - y        // Subtraction operator
x >= y       // Greater than or equal to
x <= y       // Less than or equal to
x === y      // Strict equality operator; returns true only if both operands are identical
x != y       // Inequality operator; returns true only if the operands are NOT equal
```

## Conditionals

Conditionals are statements that allow us to execute different code depending on the situation. For example, to only make an HTML element visible if a certain button is pressed. The most common way to implement a conditional statement is the if statement:

```js
if (x >= 10) {
    console.log("x is big");
}
```

Here we can see that an if statement takes a boolean expression, and only executes the code within its braces if that boolean expression is true.

We can also add an else statement which executes if the if statement's boolean condition is false:

```js
if (x >= 10) {
    console.log("x is big");
} else {
    console.log("x is small");
}
```

Here, when `x >= 10` is true, the if code will execute, but if it is false, the else code will execute instead.

More complex branching conditionals can be made with the else if construction:

```js
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
```

If the first if condition is false, the second one will be checked. If that one is also false, the next one will be checked, and so on. If all conditions are false, the final else code will be executed.

### Ternary Operator

The ternary operator is a shorthand way to write simple conditionals. It is called the ternary operator because it operates on three operands: the first is a boolean expression, and the other two are expressions, the first being executed if the boolean is true, and the second being executed if the boolean is false.

```js
passingGrade ? console.log("You passed) : console.log("You failed!");
```

As seen above, the ternary operator consists of a `?` symbol after the boolean expression, and a `:` to separate the two other operands.
