## Buttons

**Buttons** allow us to provide interactive elements on our webpage. In future classes, we will learn how to program these buttons using JavaScript, but for now, we'll focus on the visual and layout aspects.

```html
<button>Click Me!</button>
```

Above is a basic button element. We can see that the button has a default styling applied by the browser, including a background color, border, and text color. Of course, we can customize all of this using CSS.

```css
.demo-button {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
}
```

Using CSS, we have a large degree of control over the appearance and behavior of buttons. Notice that aside from basic styling, the button changes its appearance when hovered over and when clicked. Later in this lesson, we'll see how we can achieve this.

### Button Styling Examples

Various button styles: 3D effect, gradient, outline, pill-shaped buttons
## Forms

Another way to collect user input is through **forms**. Forms allow users to enter data, which can then be submitted to a server for processing. Just like with buttons, forms are often integrated with JavaScript, and can be styled with CSS.

```html
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>
```

In the example above, we have a simple form with a text input and a submit button. The **label** element is used to provide a description for the input field. Notice that both the text input and the submit button are actually both created using the `<input>` element, but have different `type` attributes.

This `<input>` element is used to create various kinds of input fields, such as text fields, radio buttons, and checkboxes:

```html
<input type="text" placeholder="Text input">
<input type="radio" name="option">
<input type="checkbox" name="option">
```

Common input types: text input, radio buttons, checkboxes
## Pseudo-classes

In CSS, we sometimes need to style elements based on specific states or properties. For example, we've seen that buttons can change their appearance when hovered over or clicked. This is achieved using what are called **pseudo-classes**.

Pseudo-classes are keywords that are added to a CSS selector, and they allow us to apply styles to elements based on their state or position in the document.

### Hover

The `:hover` pseudo-class applies styles to an element when the user hovers over it with their mouse. For example:

```css
.demo-button:hover {
    background-color: var(--secondary-color);
}
```

While this pseudo-class is very often used on buttons, such as above, it can be used on essentially any element. It should be noted, however that hover effects don't always work as intended on touch-screen devices, so it's important to consider this when designing for different platforms.

### Active

The `:active` pseudo-class applies styles to an element when it is being activated by the user, such as when a button is being clicked. For example:

```css
.demo-button:active {
    transform: scale(0.95);
}
```

### Focus

The `:focus` pseudo-class applies styles to an element when it has received focus, such as when a user clicks on an input field or navigates to it using the keyboard. For example:

```css
input:focus {
    outline: 3px solid var(--primary-color);
    outline-offset: 5px;
}
```

Remember that focus styles are important for accessibility, as they help users understand which element currently has focus. Always ensure that if you override default focus styling that it remains visible and distinguishable.

### Visited

The `:visited` pseudo-class applies styles to an element that has been visited by the user. For example:

```css
a:visited {
    color: var(--secondary-color);
}
```

After the link has been visited, it will change to display the `:visited` style.

### First-child and Last-child

The `:first-child` and `:last-child` pseudo-classes apply styles to the first and last child elements of their parent, respectively. For example:

```css
li:first-child {
    color: var(--primary-color);
}
li:last-child {
    color: var(--secondary-color);
}
```

Example: First item appears in primary color, last item in secondary color, middle items in default color.

### Nth Child

The `:nth-child(n)` pseudo-class applies styles to the nth child element of its parent. For example:

```css
li:nth-child(2) {
    color: var(--primary-color);
}
```

This allows you to target specific positions within a list or group of elements.