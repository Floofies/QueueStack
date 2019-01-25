# QueueStack
Queue & Stack classes.

- [`Queue`](#queue)
	- [Instance Properties](#instance-properties)
		- [`size`](#queuesize)
		- [`limit`](#queuelimit)
	- [Prototype Methods](#prototype-methods)
		- [`@@iterator`](#iterator)
		- [`clear`](#queueprototypeclear)
		- [`item`](#queueprototypeitem)
		- [`add`](#queueprototypeadd)
		- [`remove`](#queueprototyperemove)
		- [`head`](#queueprototypehead)
		- [`end`](#queueprototypeend)
- [`Stack`](#stack)
	- [Instance Properties](#instance-properties-1)
		- [`size`](#stacksize)
		- [`limit`](#stacklimit)
	- [Prototype Methods](#prototype-methods-1)
		- [`@@iterator`](#iterator)
		- [`clear`](#stackprototypeclear)
		- [`item`](#stackprototypeitem)
		- [`add`](#stackprototypeadd)
		- [`remove`](#stackprototyperemove)
		- [`head`](#stackprototypehead)
		- [`end`](#stackprototypeend)

You can import the constructors like so:

```JavaScript
const queuestack = require("queuestack");
const Queue = queuestack.Queue;
const Stack = queuestack.Stack;

// Using ES6 Destructuring Assignment
const {Queue, Stack} = require("queuestack");
```

# `Queue`

*Constructor*

```JavaScript
new Queue( [ iterable = null [, limit = Number.MAX_SAFE_INTEGER ]] );
```

A bounded Queue which inherits from a Doubly Linked List.

## Constructor Parameters
- **`iterable`** (*Optional*) Iterable

  The values of the optional Iterable will be used to populate the new Queue.

- **`limit`** (*Optional*) Number

  A Number which specifies the maximum number of values allowed within the Queue.

## Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Append "6" to the end of the Queue.
queue.add(6);

// Removes "1" from the beginning of the Queue.
var one = queue.remove();

// Logs 2, 3, 4, 5, 6
for (const num of queue) {
	console.log(num);
}
```

---

## Instance Properties

### `Queue.size`

*Number*
```JavaScript
Queue.size
```
A number representing the quantity of values within the Queue.

### `Queue.limit`

*Number*
```JavaScript
Queue.limit
```
A Number which specifies the maximum number of values allowed within the Queue.

---

### `Queue.prototype.@@iterator`

*Iterator*
```JavaScript
Queue[Symbol.iterator]();
```
An iterator which yields each value in the Queue.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Logs 1, 2, 3, 4, and 5.
for (const value of queue) console.log(value);
```

---

### `Queue.prototype.clear`

*Function*
```JavaScript
Queue.clear();
```
Removes all elements from the Queue.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Queue becomes empty.
Queue.clear();
```

---

### `Queue.prototype.item`

*Function*
```JavaScript
Queue.item( index );
```
Returns the vakue at the specified 0-indexed offset from the beginning of the Queue, or `null` if it was not found.

#### Parameters
- **`index`** Number

  An offset from the beginning of the Queue, starting at zero, to look for a value at.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Returns the value at index 4, the last element in Queue, which contains "5".
var five = queue.item(4);
```

---

### `Queue.prototype.add`

*Function*
```JavaScript
Queue.add( element );
```
Inserts a value at the end of the Queue.

#### Parameters
- **`element`** Any

  A value to append the Queue with.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Inserts "6" at the end of the Queue.
queue.add(6);
```

---

### `Queue.prototype.remove`

*Function*
```JavaScript
Queue.remove();
```
Removes and returns an value from the beginning of the Queue.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Returns "1" and removes it from the beginning of the Queue.
var one = queue.remove();
```

---

### `Queue.prototype.head`

*Function*
```JavaScript
Queue.head();
```
Returns the value at the beginning of the Queue, or `null` if the Queue is empty.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Returns "1".
var one = queue.head();
```

---

### `Queue.prototype.end`

*Function*
```JavaScript
Queue.end();
```
Returns the value at the end of the Queue, or `null` if the Queue is empty.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Queue is created using the contents of `arr`.
var queue = new Queue(arr);

// Returns "5".
var five = queue.last();
```

---

# `Stack`

*Constructor*

```JavaScript
new Stack( [ iterable = null [, limit = Number.MAX_SAFE_INTEGER ]] );
```

A bounded Stack which inherits from a Doubly Linked List.

## Constructor Parameters
- **`iterable`** (*Optional*) Iterable

  The values of the optional Iterable will be used to populate the new Stack.

- **`limit`** (*Optional*) Number

  A Number which specifies the maximum number of values allowed within the Stack.

## Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Append "6" to the end of the Stack.
stack.add(6);

// Removes "6" from the end of the Stack.
var six = stack.remove();

// Logs 1, 2, 3, 4, 5
for (const num of stack) {
	console.log(num);
}
```

---

## Instance Properties

### `Stack.size`

*Number*
```JavaScript
Stack.size
```
A number representing the quantity of values within the Stack.

### `Stack.limit`

*Number*
```JavaScript
Stack.limit
```
A Number which specifies the maximum number of values allowed within the Stack.

---

### `Stack.prototype.@@iterator`

*Iterator*
```JavaScript
Stack[Symbol.iterator]();
```
An iterator which yields each value in the Stack.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Logs 1, 2, 3, 4, and 5.
for (const value of stack) console.log(value);
```

---

### `Stack.prototype.clear`

*Function*
```JavaScript
Stack.clear();
```
Removes all elements from the Stack.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Stack becomes empty.
Stack.clear();
```

---

### `Stack.prototype.item`

*Function*
```JavaScript
Stack.item( index );
```
Returns the vakue at the specified 0-indexed offset from the beginning of the Stack, or `null` if it was not found.

#### Parameters
- **`index`** Number

  An offset from the beginning of the Stack, starting at zero, to look for a value at.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Returns the value at index 4, the last element in Stack, which contains "5".
var five = stack.item(4);
```

---

### `Stack.prototype.add`

*Function*
```JavaScript
Stack.add( element );
```
Inserts a value at the end of the Stack.

#### Parameters
- **`element`** Any

  A value to append the Stack with.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Inserts "6" at the end of the Stack.
stack.add(6);
```

---

### `Stack.prototype.remove`

*Function*
```JavaScript
Stack.remove();
```
Removes and returns an value from the end of the Stack.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Returns "5" and removes it from the end of the Stack.
var one = stack.remove();
```

---

### `Stack.prototype.head`

*Function*
```JavaScript
Stack.head();
```
Returns the value at the beginning of the Stack, or `null` if the Stack is empty.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Returns "1".
var one = stack.head();
```

---

### `Stack.prototype.end`

*Function*
```JavaScript
Stack.end();
```
Returns the value at the end of the Stack, or `null` if the Stack is empty.

#### Examples
Example 1: Basic Usage:

```JavaScript
// Array of arbitrary numbers.
var arr = [1,2,3,4,5];

// New Stack is created using the contents of `arr`.
var stack = new Stack(arr);

// Returns "5".
var five = stack.last();
```