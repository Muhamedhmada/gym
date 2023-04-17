

// calc calorie checked male or not

let calKindMale = document.getElementById("calKindMale")
let calKindFemale = document.getElementById("calKindFemale")
let calKind = document.getElementById("calKind")


let theKind = +5;
calKind.oninput = function(){
    if(calKindMale.checked){
        console.log("ef")
        theKind = +5;
    }
    else if(calKindFemale.checked){
        console.log("efff")
        theKind = -161
    }
}


// caloreies result test

let result = document.getElementById("result")

let heigh = document.getElementById("heigh")
let wieght = document.getElementById("weight")
let age = document.getElementById("age")



// get range value and BMR
let rangeNumber = document.getElementById("rangeNumber")
let range = document.getElementById("range")
let BMR = +1.55;
range.value = 2
rangeNumber.textContent =2
rangeNumber.textContent = range.value;
range.oninput = function(){
    rangeNumber.textContent = range.value
    if(range.value == 0){
        BMR = +1.2;
        console.log(BMR)
    }
    else if(range.value == 1){
        BMR = +1.375;
        console.log(BMR)
    }
    else if(range.value == 2){
        BMR = +1.55;
        console.log(BMR)
    }
    else if(range.value == 3){
        BMR = +1.725;
        console.log(BMR)
    }
    else if(range.value == 4){
        BMR = +1.9; 
        console.log(BMR)
    } 
}

// function to calc caloriies

let calcNow = document.getElementById("calcNow")
calcNow.onclick = function(){
    result.style.visibility="visible"
    if(heigh.value == ""|| wieght.value =="" || age.value == ""){
        result.innerHTML = 0
    }else{
        result.innerHTML = eval(((10 * +wieght.value )+ (6.25 *heigh.value)
         - (5*+age.value) + theKind)*BMR)
    }
    
}