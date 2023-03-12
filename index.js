let btnC = document.querySelector('.btn');
let textH = document.querySelector('.headerh1');

btnC.addEventListener('click', changeText);

let oText = textH.textContent;
function changeText(){
    textH.innerHTML = "Working, Please Wait...";
    setTimeout(timerText, 5000);

}

function timerText(){
    textH.innerHTML = oText;
}

