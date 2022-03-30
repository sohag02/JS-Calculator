let screen = document.getElementById('output')
btns = document.querySelectorAll('button');

let liveScreen = document.getElementById('output2')

screenValue = '';

for (item of btns) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == '=') {
            screenValue = eval(screenValue);
        }
        else if (buttonText == 'AC'){
            screenValue = '';
        }
        else{
            screenValue += buttonText
        }
        screen.value = screenValue
        if (screenValue != '') {
            liveScreen.value = "= " + eval(screenValue);
        }
        else{
            liveScreen.value = '';
        }
    })
}