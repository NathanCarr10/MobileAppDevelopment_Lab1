let flag: boolean = true;
console.log("The value of flag is " + flag);

let myNumber: number = 5 ;
console.log("The value of myNumber is: "+myNumber);

let myString: string = "Hello";
console.log("The value of myString is:" +myString);

let myArray: number[] = [1,2,3];
for(let i=0; i<myArray.length;i++){

    console.log("The value of item" +(i+1)+ "is " + myArray[i]);

}

let myArray2: Array <number> = [1,2,3];
myArray.forEach((item)=>{

    console.log("The value is " +item);

})


let unKnown: any = "Whatever we want";
console.log("The value of unKnown is: "+unKnown);


