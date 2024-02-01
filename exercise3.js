var flag = true;
console.log("The value of flag is " + flag);
var myNumber = 5;
console.log("The value of myNumber is: " + myNumber);
var myString = "Hello";
console.log("The value of myString is:" + myString);
var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
    console.log("The value of item" + (i + 1) + "is " + myArray[i]);
}
var myArray2 = [1, 2, 3];
myArray.forEach(function (item) {
    console.log("The value is " + item);
});
var unKnown = "Whatever we want";
console.log("The value of unKnown is: " + unKnown);
