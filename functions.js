var current = 1;

const delay = 500;

const arr = ["gallery", "home", "settings"];



const right = function() {
    document.getElementById(arr[current % arr.length]).checked = false
    current++
    document.getElementById(arr[current % arr.length]).checked = true
}

const left = function() {
    document.getElementById(arr[current % arr.length]).checked = false
    current--
    document.getElementById(arr[current % arr.length]).checked = true
}