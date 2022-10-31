var def = 1;
var current = def;

const delay = 500;

const arr = ["gallery", "home", "settings"];


const move = function(direction) {
    document.getElementById(arr[current % arr.length]).checked = false
    if(direction === "right") {
        current++;
        console.log(current, current % arr.length)
    } else {
        current--;
        console.log(current, current % arr.length)
    }
    document.getElementById(arr[current % arr.length]).checked = true
}

// const right = function() {
//     document.getElementById(arr[current % arr.length]).checked = false
//     current++
//     document.getElementById(arr[current % arr.length]).checked = true
// }

// const left = function() {
//     document.getElementById(arr[current % arr.length]).checked = false
//     current--
//     document.getElementById(arr[current % arr.length]).checked = true
// }