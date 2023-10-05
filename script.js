//first page
let firstPageButtons = document.querySelectorAll('.mainBtn');

firstPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.className.includes('correct')) {
            event.target.style.border = '5px solid #4CEC68';
            setTimeout(() => window.location.replace('second.html'), 200);
        }
        else {
            event.target.style.border = '5px solid #D8233Dff';
            event.target.style.opacity = '0.5';
            if (event.target.innerHTML == 'Július 1.') {
                event.target.innerHTML = 'Majdnem jou';
            }
            else if (event.target.innerHTML == 'Június 29.') {
                event.target.innerHTML = '-1 nap';
            }
        }
    });
});

//second page
let secondPageButtons = document.querySelectorAll('.secondPageButtons');

secondPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.className.includes('correct')) {
            event.target.style.border = '5px solid #4CEC68';
            setTimeout(() => window.location.replace('third.html'), 200);
        }
        else {
            event.target.style.border = '5px solid #D8233Dff';
            event.target.style.opacity = '0.5';
            if (event.target.innerHTML == 'Eger') {
                event.target.innerHTML = 'Közel jársz';
            }
            else if (event.target.innerHTML == 'Debrecen') {
                event.target.innerHTML = '<span style="font-size: 50px">😬</span>';
            }
        }
    });
});

//third page
let answers = [false, false, false];
let thirdPageButtons = document.querySelectorAll('.w250');

thirdPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.id == "_1") {
            event.target.style.border = '5px solid #4CEC68';
            answers[0] = true;
        }
        else if (event.target.id == "_2") {
            event.target.style.border = '5px solid #4CEC68';
            answers[1] = true;
        }
        else if (event.target.id == "_3") {
            event.target.style.border = '5px solid #4CEC68';
            answers[2] = true;
        }
        if ((answers[0] && answers[1] && answers[2])) {
            setTimeout(() => window.location.replace('final.html'), 500);
        }
    });
});