// random color hexId genrater
const randomColor = () => {
    let hexId = '#'; // store hexValue
    const hex = "0123456789ABCDEF";

    for(let i=0; i < 6; i++){
        hexId += hex[Math.floor(Math.random()*16)]
    }
    return hexId;
}

// start btn 
const startbtn = document.getElementById('start').addEventListener('click', start)

// change bg-color 
let interval;
function start(){
    interval = setInterval(changeColor,1000) // change color every second
}
function changeColor(){
    if(interval){
        document.body.style.backgroundColor = randomColor() 
    }
}

// stop btn
const stopbtn = document.getElementById('stop').addEventListener('click', stop)

function stop(){
    clearInterval(interval);
    interval = null;
}