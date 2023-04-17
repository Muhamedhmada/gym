let trainer = document.getElementsByClassName("trainer")
let info = document.getElementsByClassName("info")
let trainerRate = document.querySelectorAll(".trainerRate i")
let scrollBtn = document.getElementById("scrollBtn");
let contactPage = document.getElementById("contactPage")
// 

// to display info when hover
for(let i = 0 ; i<trainer.length;i++ ){
trainer[i].onmouseover= function (){
    info[i].style.display ="block"
}
}
for(let i = 0 ; i<trainer.length;i++ ){
    trainer[i].onmouseleave= function (){
        info[i].style.display ="none"
    }
}

// star rate

trainerRate.forEach(function(element,i){
    element.onclick = function(){
        for(let a = 0 ; a<i+1; a++){
            trainerRate[a].style.opacity = '1';
        }
        for( let a = i+1 ;a< trainerRate.length+1;a++){
            trainerRate[a].style.opacity = '.3'
        }
    }
});

// scroll function

scrollBtn.onclick = function(){
    window.scrollTo({
        top:0
    });
}


// loader
let widthCount = 5
let countnumber = 20

let before = document.getElementById("before");
let progressBar = document.getElementById("progressBar")
let number = document.getElementById("number");
let loadeing = document.getElementById("loader")


let loader = setInterval(animation,0)


function animation(){
    if( widthCount == 400 ||  countnumber == 100){
       clearInterval(loader)
       before.innerHTML = "completed"
       number.innerHTML = 100 +'%'
    }else{
        widthCount += 8;
        countnumber +=2;
        number.innerHTML = +countnumber + '%'
        before.style.width = widthCount + 'px'
    }
}
window.onload = function(){
    loadeing.style.display = "none"
}

// calories

let range = document.getElementById("range")
console.log(range.style.width)
console.log("df")