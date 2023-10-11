function fadeInMain() {
    let img = document.querySelector('img');
    let text = document.querySelector('.textContainer');
    setTimeout(() => {
        img.style.opacity = '1';        
    }, 200);
    setTimeout(() => {
        text.style.opacity = '1';
    }, 1000);
};

function fadeInButtons() {
    let buttons = document.querySelectorAll('button');

    buttons.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index*1000);
    });
}

function fadeInFinal() {
    let texts = document.querySelectorAll('span');

    texts.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
        }, index*2000);
    });
}

//index page
let playButton = document.getElementById('play');

try {
    playButton.addEventListener('click', () => location.replace('first.html'));   
} 
catch {
    
}

//first page
let firstPageButtons = document.querySelectorAll('.mainBtn');

firstPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.className.includes('correct')) {
            localStorage.setItem('first', 'correct');
            location.replace('second.html');
        }
        else {
            localStorage.setItem('first', 'incorrect');
        }
        location.replace('second.html');
    });
});

//second page
let secondPageButtons = document.querySelectorAll('.secondPageButtons');

secondPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.className.includes('correct')) {
            localStorage.setItem('second', 'correct');
        }
        else {
            localStorage.setItem('second', 'incorrect');
        }
        location.replace('third.html');
    });
});

//third page
let thirdPageButtons = document.querySelectorAll('.third');

thirdPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        console.log(event.target.className);
        if (event.target.className.includes('correct')) {
            localStorage.setItem('third', 'correct');
            if  (localStorage.getItem('first') == 'correct' && localStorage.getItem('second') == 'correct') {
                location.replace('final.html');
            }
            else {
                location.replace('mistake.html')
            }
        }
        else {
            localStorage.setItem('third', 'incorrect');
            location.replace('mistake.html');
        }
    })
});

//fourth page
let answers = [false, false, false];
let fourthPageButtons = document.querySelectorAll('.bonus');

fourthPageButtons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.target.style.transition = 'unset';
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
            setTimeout(() => window.location.replace('final2.html'), 500);
        }
    });
});

//mistake page
let badAnswer = 0;

if (localStorage.getItem('first') == 'incorrect') {
    badAnswer++;
}
if (localStorage.getItem('second') == 'incorrect') {
    badAnswer++;
}
if (localStorage.getItem('third') == 'incorrect') {
    badAnswer++;
}

let retryButton = document.getElementById('retry');

try {
    document.getElementById('dynamic').innerHTML = `${badAnswer}`;
    retryButton.addEventListener('click', () => location.replace('first.html'));   
} 
catch {

}

//final page
let finalButton = document.getElementById('lesssgooo');
try {
    finalButton.addEventListener('click', () => location.replace('fourth.html'));
} 
catch {
    
}