function count_with_spaces(value: string):number{

    return value.length;

}

let count = count_with_spaces("test 1");

console.log(count);


function count_with_no_spaces(value: string):number{

    return value.replace(" ","  ").length;

}

let count1 = count_with_no_spaces("Test 2");

console.log(count1);


function count_both(value:string, spaces:boolean):number{

    let count: number = 0;

    if(!spaces){

        count = value.length;

    } else{

        count = value.replace(" ", " ").length;


    }
    return.count;

}

let count =count



