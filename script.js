var newColors = document.querySelector(".new");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var divHard = document.querySelector(".hard");
var start = document.querySelector(".start");
var rgb = document.querySelector(".rgbValue");
var title = document.querySelector(".title");
var isEasy = true;

newColors.addEventListener("mouseover",function(){
    this.style.backgroundColor = "rgb(30, 136, 229)";
    this.style.color = "white";
});
newColors.addEventListener("mouseout",function(){
    this.style.backgroundColor = "white";
    this.style.color = "rgb(30, 136, 229)";
});

easy.addEventListener("click",function(){
    if(!isEasy){
        hard.style.color = "rgb(30, 136, 229)";
        hard.style.backgroundColor = "white";
        easy.style.color = "white";
        easy.style.backgroundColor = "rgb(30, 136, 229)";
        isEasy = true;
        divHard.classList.add("mudaDisplay");
        reset();
    }
});

hard.addEventListener("click",function(){
    if(isEasy){
        easy.style.color = "rgb(30, 136, 229)";
        easy.style.backgroundColor = "white";
        hard.style.color = "white";
        hard.style.backgroundColor = "rgb(30, 136, 229)";
        isEasy = false;
        divHard.classList.remove("mudaDisplay");
        reset();
    }
});

start.addEventListener("mouseout", function(){
    this.style.color = "black";
    this.style.backgroundColor = "white";
});

start.addEventListener("mouseover", function(){
    this.style.color = "white";
    this.style.backgroundColor = "black";
});
newColors.addEventListener("click", play);

var rngColor = "rgb(30, 136, 229)";
var x = document.querySelectorAll(".option");
for(var z = 0; z< 6; z++){
    x[z].style.backgroundColor = "rgb(30, 136, 229)";
}
var position = 0;
var rng1 = 0;
var rng2 = 0;
var rng3 = 0;
var j = 0;

function play(){
    if(isEasy){
        easy.style.backgroundColor = "rgb(30, 136, 229)";
        easy.style.color = "white";
        hard.style.color = "rgb(30, 136, 229)";
        hard.style.backgroundColor = "white";
    }else{
        easy.style.backgroundColor = "white";
        easy.style.color = "rgb(30, 136, 229)";
        hard.style.color = "white";
        hard.style.backgroundColor = "rgb(30, 136, 229)";
    }
    rng1 = Math.floor(Math.random() * 256);
    rng2 = Math.floor(Math.random() * 256);
    rng3 = Math.floor(Math.random() * 256);
    rngColor = "rgb(" + rng1+", " + rng2+", " + rng3 +")";
    rgb.textContent = rngColor.toUpperCase();
    if(isEasy){
        position = Number(Math.floor(Math.random() * 3));
        j=3;
    }else{
        position = Number(Math.floor(Math.random() * 6));
        j=6;
    }
    x[position].style.backgroundColor = rngColor;
    generateWrongColors(position, j);
    title.style.backgroundColor = "rgb(30, 136, 229)";
    start.textContent = "Start Game!"
}

function generateWrongColors(index, j){
    for(var i = 0; i < j;i++){
        if(!(i === index)){
            if(rng1 > 127){
                rng1 -= Math.floor(Math.random() * 127);
            }else{
                rng1 += Math.floor(Math.random() * 127);
            }
            if(rng2 > 127){
                rng2 -= Math.floor(Math.random() * 127);
            }else{
                rng2 += Math.floor(Math.random() * 127);
            }
            if(rng3 > 127){
                rng3 -= Math.floor(Math.random() * 127);
            }else{
                rng3 += Math.floor(Math.random() * 127);
            }
            x[i].style.backgroundColor = "rgb("+rng1+", "+ rng2+", "+rng3+")";
        }
    }
}

function reset(){
    for(var i = 0; i < 6; i++){
        x[i].style.backgroundColor = "rgb(30, 136, 229)";
    }
    rgb.textContent = "RGB(30, 136, 229)";
    title.style.backgroundColor = "rgb(30, 136, 229)";
    start.textContent = "Start Game!"
    newColors.style.color = "rgb(30, 136, 229)"
    rngColor = "rgb(30, 136, 229)";
}

function selectOption(selected){
    if(x[selected].style.backgroundColor === rngColor){
        title.style.backgroundColor = rngColor;
        start.textContent = "YOU WIN!!!!";
        if(isEasy){
            easy.style.backgroundColor = rngColor;
            easy.style.color = "white";
            hard.style.color = rngColor;
            hard.style.backgroundColor = "white";
            newColors.style.color = rngColor;
        }else{
            console.log(rngColor);
            hard.style.backgroundColor = rngColor;
            hard.style.color = "white";
            easy.style.color = rngColor;
            easy.style.backgroundColor = "white";
            newColors.style.color = rngColor;
        }
        for(var k = 0; k < 6;k++){
            x[k].style.backgroundColor = rngColor;
        }
    }else{
        x[selected].style.backgroundColor = "rgb(46, 46, 46)";
        start.textContent = "WRONG! Try Another One."
    }
}
