let pass = document.querySelector('#pw');
let repass = document.querySelector('#pwrepeat');
let submitbtn = document.querySelector("button");
let phonenum = document.querySelector("#number");

submitbtn.addEventListener('click', actions);

function actions(){
    if (pass.value !== repass.value){
        document.querySelector('.pwmismatch').innerHTML = "Password doesn't match!!";
    }
    else {
        document.querySelector('.pwmismatch').innerHTML = "";
    }
}