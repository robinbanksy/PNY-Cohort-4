## The Position Property

In CSS, the `position` property gives us a greater degree of control over the placement on individual elements. The default value is `static`, which causes the element to be positioned according to the flow of the document. There are a number of alternative values.

### Relative

The `relative` value positions the element **relative** to its usual document flow position. Initially, an element switched from `static` to `relative` shows no change in positioning. The difference lies in the availability of the `top`, `right`, `bottom`, and `left` CSS properties. These properties allow us to define offsets from the element's initial position. A value of `0` results in no gap between the element and the side being defined; the larger the value, the further the element will be placed from that side.

For example, if the `left` property is defined as `100px`, the element will be positioned a hundred pixels to the right of its initial document flow position.

```css
.relative-element {
    position: relative;
    left: 100px;
}
```

This is a **statically positioned element.**

This is a **relatively positioned element** with an offset.

### Absolute

The `absolute` value is similar to `relative`, but the element's offsets are now calculated not relative to its document flow position, but rather relative to the position of its closest ancestor with the `relative` position value.

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    bottom: 0;
    right: 0;
}
```

Relatively Positioned Parent
- Absolutely Positioned Child

Here we can see how we can use our offset values on an absolutely positioned element to get complete control over its position within its parent element.

### Fixed

The `fixed` position value is fairly self explanatory. The element will always appear in the same position in the viewport, even if you scroll around.

```css
.relative-element {
    position: fixed;
}
```

See [demo](demos/fixed.html)