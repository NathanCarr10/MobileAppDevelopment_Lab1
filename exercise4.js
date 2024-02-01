function count_with_spaces(value) {
    return value.length;
}
var count = count_with_spaces("test 1");
console.log(count);
function count_with_no_spaces(value) {
    return value.replace(" ", "  ").length;
}
var count1 = count_with_no_spaces("Test 2");
console.log(count1);
function count_both(value, spaces) {
    var count = 0;
    if (!spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", " ").length;
    }
    return .count;
}
