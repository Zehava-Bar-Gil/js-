let text = document.querySelector('#text');
let btn = document.querySelector('#btn');
let counter = document.querySelector('.counter');

function textChange() {
    let textAreaVal = text.value;

    if (textAreaVal.length < 100)
    {
        text.value = textAreaVal;
        btn.setAttribute('disabled', 'disabled');
    }
    else 
    {
        btn.removeAttribute('disabled');
    }

    counter.innerHTML = `${textAreaVal.length}/100`;

}

