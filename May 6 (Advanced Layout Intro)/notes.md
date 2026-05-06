## Advanced Layout Using CSS

So far, we've learned to use CSS to make changes to the appearance of the content of our web pages by doing things such as changing colors, sizes, or fonts. On the other hand, our pages have all still used a basic **inline** layout (the default HTML layout).

Today, we'll see how CSS can be used to not only change the appearance of our content, but also to create more complex and flexible layouts.

## Simple CSS Layout

A very simple example of how CSS can affect layout is by formatting our content into multiple columns.

To do this, we can use the `column-count` property. This property specifies the number of columns an element should be divided into.

For example, if we have a `<div>` element with the class `.content`, we can use the following CSS to divide its content into 3 columns:

```css
.content {
    column-count: 3;
}
```

This will cause the content inside the `.content` element to be displayed in 3 columns, with the content flowing from one column to the next. This allows for a more organized and visually appealing layout while still maintaining its default inline nature.

Demo: [demos/columns.html](./demos/columns.html)

## The Display Property

The `display` property in CSS controls how an element is displayed on the page. By default, most elements are displayed as either `inline` or `block`, depending on the element.

### Block Display

Block-displayed elements start on a new line and take up the entire width of their container by default. Paragraph (`<p>`) tags, heading (`<h1>`–`<h6>`) tags, and `<div>` tags are examples of block-displayed elements.

We can also make elements display as block by setting the `display` property to `block`:

```css
.my-element {
    display: block;
}
```

### Inline Display

Unlike block-displayed elements, inline-displayed elements do not start on a new line and only take up as much width as necessary. Anchor (`<a>`) tags and `<span>` tags are examples of inline-displayed elements. When you put an anchor tag within a paragraph, for example, the resulting link won't break up the rest of the text.

We can also make elements display as inline by setting the `display` property to `inline`:

```css
.my-element {
    display: inline;
}
```

### Inline-Block Display

Inline-block displayed elements are similar to inline elements, but they can have a width and height set. This is useful for creating navigation menus or other elements that need to be displayed inline but also have a specific size.

```css
.my-element {
    display: inline-block;
}
```

### Display: None

Another display option is the `none` value, which completely removes an element from the page:

```css
.my-element {
    display: none;
}
```

When an element is set to `display: none;`, it will not be visible on the page and will not take up any space. This can be useful when you have an element that should only be visible under certain conditions.

Display mode demo: [demos/display-mode-demo.html](./demos/display-mode-demo.html)

## Flexbox

Flexbox is a powerful layout mode. When an element is set to `display: flex;`, it becomes a flex container, and its direct children become flex items. A flexbox arranges its child elements either in columns or rows and can automatically modify the height or width of the child elements to better fit the available space.

Demo: [demos/flexbox.html](./demos/flexbox.html)

In the demo, the items within the flex container are arranged horizontally by default because `flex-direction` is `row`.

Flexbox provides many properties unique to flex containers and flex items, which we'll explore later. Examples include `flex-basis`, `flex-wrap`, `flex-grow`, and `flex-shrink`.
