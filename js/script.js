let pass = document.querySelector('#pw');
let repass = document.querySelector('#pwrepeat');

function checkpass(e){
    if (pass.value !== repass.value){
        document.querySelector('.pwmismatch').innerHTML = "*Password doesn't match!!";
    }
    else {
        document.querySelector('.pwmismatch').innerHTML = "";
    }
}

pass.addEventListener('input', checkpass);
repass.addEventListener('input', checkpass);