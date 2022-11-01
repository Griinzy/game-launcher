var current = 1;

const arr = ["about", "home", "settings"];

const move = function(direction) {
    document.getElementById(arr[current]).checked = false
    if(direction === "right"){
        if(current >= arr.length-1) current = 0;
        else current++;
    }
    else if(direction === "left"){
        if(current <= 0) current = arr.length-1;
        else current--;
    }
    else console.log("what the fuck did you do");
    document.getElementById(arr[current]).checked = true;

    // const theMath = (current % arr.length + arr.length) % arr.length

    // document.getElementById(arr[theMath]).checked = false

    // if(direction === "right") {
    //     current++; //yeha ok ill think about it later
    //     console.log(theMath)
    // } else {
    //     current--;
    //     console.log(theMath)
    // }

    // document.getElementById(arr[theMath]).checked = true
}
const updateContent = function(){
    if(document.getElementById("about").checked == true) {
        current = 0;
        document.getElementById("contentAbout").style.display = "block";
        document.getElementById("contentHome").style.display = "none";
        document.getElementById("contentSettings").style.display = "none";
    }
    else if(document.getElementById("home").checked == true) {
        current = 1;
        document.getElementById("contentAbout").style.display = "none";
        document.getElementById("contentHome").style.display = "block";
        document.getElementById("contentSettings").style.display = "none";
    }
    else if(document.getElementById("settings").checked == true) {
        current = 2;
        document.getElementById("contentAbout").style.display = "none";
        document.getElementById("contentHome").style.display = "none";
        document.getElementById("contentSettings").style.display = "block";
    }
}

// theMath dont work 
// again?? ;-; why it do that s;-;-;-;-; eeeeeeeeeeeeeeeeeeeeee
// are you joking or does it actually?
//after a single loop around it just goes the other way until it loops again????? what the fuck man after the next loop it goes the right way again ok i gety iut kmao

const update = function(a){
    console.log(a)
    console.log("clicked the button eh? maybe if you got rid of that yee yee ass haircut you'd get some bitches on yo dick")
}