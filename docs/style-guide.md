# Style Guide

## Table of Contents
  1. [Conditional structures](#conditional-structures)
  1. [Objects](#objects)
  1. [Imports](#imports)
  1. [Ordering](#ordering)
  1. [Components](#components)
  1. [Method sequence](#method-sequence)
  1. [Quotes](#quotes)
  1. [Styles](#styles)

### Conditional structures
```javascript
// bad
if(foo === bar){
// ...

// good
if (foo === bar) {
//...

// bad
while(foo === bar){
//...

// good
while (foo === bar) {
//...

// bad
switch(foobar){
//...

// good
switch (foobar) {
//...
```

### Objects
```javascript

// bad
const object = { a: 'a', b: 'b' }

// bad
const object = { a: 'a', b: 'b', }

// good
const object = {
  a: 'a',
  b: 'b'
}
```

### Imports
#### Simple import
```javascript
// bad
import { a, } from 'alphabet'

// bad
import {
  a
} from 'alphabet'

// bad
import {
  a,
} from 'alphabet'

// good
import { a } from 'alphabet'
```
#### Import multiple
```javascript
// bad
import { a, b, c } from 'alphabet'

// bad
import { a, b, c, } from 'alphabet'

// good
import {
  a,
  b,
  c,
} from 'alphabet'

// Always prefer alphabetical order
```
#### Ordering
1. React
2. React Native
3. Third party libraries
4. Local modules

Separate each kind of import with a white line.
```javascript
import React from 'react'

import {
  Text,
  View,
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import R from 'ramda'

import MyComponent from './components/my-component'
```

### Components
#### Single Prop
```jsx
// bad
<Component
    propA="a" />

// good
<Component propA="a" />
```
#### Multiple Props
```jsx
// bad
<Component propA="a"
     propB="b"  />
// bad
<Component propA="a" propB="b" />

// good
<Component
    propA="a"
    propB="b" />
```

### Method sequence
1. Static methods
2. `constructor`
3. `componentWillMount`
4. `componentDidMount`,
5. `componentWillReceiveProps`,
6. `shouldComponentUpdate`,
7. `componentWillUpdate`,
8. `componentDidUpdate`,
9. `componentWillUnmount`,
10. *clickHandlers* or *eventHandlers* like `onButtonClick()` or `onChangeInput()`
11. *getter methods* for render like `getItems()`
12. *render methods*  like `renderItems()`
13. `render`

```javascript
class MyComponent extends Component {
  static propTypes = {
    // ...
  }

  constructor() {
    // ...
  }

  componentWillMount() {
    // ...
  }

  componentDidMount() {
    // ...
  }

  componentWillReceiveProps() {
    // ...
  }

  shouldComponentUpdate() {
    // ...
  }

  componentWillUpdate() {
    // ...
  }

  componentDidUpdate() {
    // ...
  }

  componentWillUnmount() {
    // ...
  }

  onButtonClick() {
    // ...
  }

  getItems() {
    // ...
  }

  renderItems() {
    // ...
  }

  render() {
    // ...
  }
}
```

### Quotes

Except for the JSX markup, you should always use single quotes.

```js
// bad
const foo = "bar"

// good
const foo = 'bar'
```

```jsx
// bad
<Foo value='bar' />

// good
<Foo value="bar" />
```

### Styles

#### Declaration
Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual

Positioning comes first because it can remove an element from the normal flow of the document and override box model related styles. The box model comes next as it dictates a component's dimensions and placement.

Everything else takes place inside the component or without impacting the previous two sections, and thus they come last.


```javascript
const styles = StyleSheet.create({
  /* Positioning */
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 100,
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',

  /* Box-model */
  width: 100,
  height: 100,
  margin: 10,
  padding: 10,

  /* Typography */
  color: '#333',
  textAlign: center,

  /* Visual */
  backgroundColor: '#F5F5F5',
  borderColor: '#E5E5E5',

  /* Misc */
  opacity: 1,
})
```

#### Using
```
// bad
<Foobar style={{backgroundColor: '#F5F5F5'}} />

// good
<Foobar style={styles.foobar} />

// good
<Foobar style={[styles.foo, styles.bar]} />
```