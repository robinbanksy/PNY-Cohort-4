## HTML Review

This is a review of the key concepts covered in the previous classes.

HTML stands for **HyperText Markup Language**. It is the standard markup language for creating web pages. We use HTML to define the **structure** and **content** of web pages.

### Basic HTML Structure

An HTML file is made of **elements**, defined by **tags**, which are the building blocks of a webpage. Tags take the following form:

```
<tag>Content</tag>
```

For example, the `<h1>` tag is used to define a heading, and the `<p>` tag is used to define a paragraph.

```
<h1>Heading Content</h1>

<p>Paragraph Content</p>
```

The basic structure of an HTML document includes a `<head>` section and a `<body>` section, both inside of a root `<html>` tag.

```
<html>
    <head>
        <title>Document Title</title>
    </head>
    <body>
        Page Content goes here
    </body>
</html>
```

### HTML Semantic Elements

Often we use semantic layout elements to create a more structured and accessible webpage:

```
<body>
    <header>
        Header content goes here
    </header>
    <nav>
        Navigation content goes here
    </nav>
    <main>
        Main content goes here
    </main>
    <aside>
        Sidebar content goes here
    </aside>
    <footer>
        Footer content goes here
    </footer>
</body>
```

### HTML Attributes

Another common HTML pattern is the use of attributes to provide additional information about elements:

```
<tag attribute="value">Content</tag>
```

For example, the `href` attribute is used in anchor tags to specify the URL of the page the link goes to:

```
<a href="https://www.example.com">Click here</a>
```

Or the `id` attribute is used to uniquely identify an element:

```
<p id="my-element">Content</p>
```

## CSS Introduction

CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to describe the presentation of a document written in HTML. CSS allows us to control the layout, colors, fonts, and overall appearance of our web pages.

CSS can be applied to HTML elements in three ways:

- **Inline CSS:** Applied directly to an HTML element using the `style` attribute.
- **Internal CSS:** Defined within a `<style>` tag in the `<head>` section of the HTML document.
- **External CSS:** Linked to an external stylesheet file using the `<link>` tag in the `<head>` section.

Generally speaking, using an external stylesheet is the most efficient and maintainable approach for styling web pages. Inline CSS and Internal style tags are fine for small projects or quick prototypes, but they quickly become difficult to manage as the project grows.

### Basic CSS Syntax

The syntax for CSS rules consists of a selector and a declaration block:

```
selector {
    property: value;
}
```

For example, to change the color of all paragraphs to blue, we can use the following CSS rule:

```
p {
    color: blue;
}
```

### More Specific Selectors

We may not want every element of a certain type to have the same style. We can use more specific selectors to target individual elements. For example, we can use IDs:

```
<h2 id="my-id">Content</h2>
```

```
#my-id {
    font-size: 16px;
}
```

In this example, the rule will only apply to the element with the ID "my-id". This way, we can apply unique styles to specific elements on our page. However, it is generally better not to use IDs for styling purposes. Instead, we use **classes**.

Classes are similar to IDs but can be applied to multiple elements:

```
<button class="my-class">Content</button>
```

```
.my-class {
    background-color: blue;
    color: white;
}
```

In this example, the rule will apply to all elements with the class "my-class". This allows us to reuse styles across multiple elements, making our CSS more efficient and easier to maintain.