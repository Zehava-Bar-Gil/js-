const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
    //chack for data that was inputted & if there is a next input, focus it
    const input = e.target;
    if (input.nextElementSibling && input.value){
input.nextElementSibling.focus();
    }

}
setTimeout(function () {
function handlePaste(e){
const paste = e.clipboardData.getData('text');
//loop over each input, and populate with the index of that string
inputs.forEach((input, i) => {
  console.log(input);  
  input.value = paste[i] || '';
});
}

inputs[0].addEventListener('paste' , handlePaste);
form.addEventListener('input', handleInput);

}, 0.5);