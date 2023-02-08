let pass = document.querySelector('#pw');
let repass = document.querySelector('#pwrepeat');

function checkpass(e){
    if (pass.value !== repass.value){
        document.querySelector('.pwmismatch').innerHTML = "*Password doesn't match!!";
        document.querySelector('#pw').style.borderColor = 'red';
        document.querySelector('#pwrepeat').style.borderColor = 'red';
    }
    else {
        document.querySelector('.pwmismatch').innerHTML = "";
        document.querySelector('#pw').style.borderColor = '#E5E7EB';
        document.querySelector('#pwrepeat').style.borderColor = '#E5E7EB';
    }
}

pass.addEventListener('input', checkpass);
repass.addEventListener('input', checkpass);