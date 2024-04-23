let a = [1,2,3,4]
a[1.5] = 1.5

console.log(a)

/*
In JavaScript, when you assign a value to a non-integer index of an array,
you're effectively adding a property to the array object, not adding an
element to the array itself. Let's break down what happens:

1. You have an array a with elements [1, 2, 3, 4].
2. You attempt to assign a value 1.5 to the index 1.5 of the array a.
3. Since JavaScript arrays are zero-indexed and only accept integer indices, a[1.5] is treated as a property assignment rather than an element assignment.
4. Therefore, 1.5 is added as a property to the array object a, but it does
not affect the length of the array or change the actual elements of the
array.
5. When you log the array a to the console, you will see that it remains [1, 2, 3, 4], and the property 1.5 is added to it.
*/
