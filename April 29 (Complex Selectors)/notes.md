## Complex CSS Selectors

As covered in the previous lesson, CSS rules take the following form:

```css
selector {
    property: value;
}
```

The "selector" part of a CSS rule is what tells the browser which HTML elements to apply the rule to. We've seen that we can use element type selectors, and also class selectors and id selectors to target specific elements. Today we'll see examples of more complex selectors, which are often composed of multiple simple selectors.

### Multi-Class Selectors

Example HTML:

```html
<div class="box red">Red Box</div>
<div class="box blue">Blue Box</div>
<div class="box green">Green Box</div>
```

Example CSS:

```css
.box.red {
    background-color: red;
}
```

Remember that a single element can have multiple classes applied to it. This CSS rule targets elements only if they have both the classes "box" and "red".

### Descendant Selectors

Example HTML:

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
<div class="item">Item 4</div>
<div class="item">Item 5</div>
```

Example CSS:

```css
.container .item {
    color: red;
}
```

This rule applies to any element with the class "item" that is a descendant of an element with the class "container". It does not apply to the "item" elements outside of the "container".

### Child Selectors

Example HTML:

```html
<div class="container">
    <div class="item">
        <div class="item">Item 4</div>
    </div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

Example CSS:

```css
.container > .item {
    font-size: 20px;
}
```

This rule applies only to elements with the class "item" that are direct children of an element with the class "container". It does not apply to nested "item" elements inside other elements within the "container".

### Other Examples

```css
h2#section-one {
    letter-spacing: 2px;
}
```

This rule targets an `h2` element that also has the id `section-one`.

```css
.nav-button#home-button {
    background-color: blue;
}
```

This rule targets an element with the class `nav-button` that also has the id `home-button`.

```css
header img.logo {
    width: 20px;
    height: 20px;
}
```

This rule targets any `img` element with the class `logo` that is a descendant of a `header` element.
