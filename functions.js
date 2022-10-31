document.onkeydown = checkKey;
function checkKey(e){
    e = e || window.event;
    if(e.code == '81')
    {
        document.getElementById('#gallery').checked = true;
    }
}