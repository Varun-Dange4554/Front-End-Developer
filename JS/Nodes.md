# Intoduction of `java-script`

1. event handling on web-page.
1. **_JavaScript_** is object base _programming language_.{ }
1. this prefer `class-base` & `function-base`

```js

function names(){
    console.log('hello function java script...')
}

class{
    console.log('hello class java script ')
}
```

### Internal & External `JS`

- Internal JS

```js
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<script>
    console.log('hello java script...');
</script>
</html>
```

- External JS

```js
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<script src="./fileName">
</script>
</html>
```

## Data - Type in `js`

1. String

```js
var str = 'string'; // single qoute
var str = 'string'; // double qoute
var str = `string`; // back-tick -> ternary operator `${name}`
```

1. Number.

```js
var num = 19;
```

2. Boolean.

```js
var bool = true;
```

3. Array.

- Array dataType was `Object` it's store value in index format..

```js
var arr = [1, 2, 3, 4]; // array of number [];
```

4. Object.

- will Store the value as a **_key value pair_**
- data-type of this will give you a object only..

```js
var obj = {
  name: 'mehfooz',
};
```

4. arrayObject.

```js
var arrObj = [
  {
    id: 8899009202920,
    name: 'mehfooz khan',
    age: 26,
    DOB: 23 - 04 - 200,
  },
  {
    id: 8899009202920,
    name: 'abhishek',
  },
];
```
## Operater's in `js`

1. **Arithmetic operators**

- this will contain the math's operation like eg.. 
**[add,sub,mul,div,expo,module]**

2. **comparison operators**

- `==` -->In this **_js_** use to convert the number if they have string **type** and the perfrom the operation,and this will return alway's _boolean_ value.

- `===`-->In this **js** use to compire **data-type** & **data-value** show be alway's same then perform operation,and this will return alway's__boolean__ value.