let hLine = [];
let vLine = [];
let cLine = [];
let globalButton;
let turn = 1;
loadGame();

let teamX = document.getElementById('teamX');
let teamO = document.getElementById('teamO');

teamO.style.opacity = 1;
teamX.style.opacity = 0.5;
function loadGame() {


   
        turn = 1;
        hLine = [];
        vLine = [];
        cLine = [];
        buttons = document.querySelectorAll('button');
        buttons.forEach(function (button) {
            button.innerText = ""
            button.style.width = '10rem';
            button.style.height = '10rem';
            button.style.fontSize = '5rem';
            button.classList.remove('btn-primary');
            button.classList.remove('btn-danger');
            button.classList.add('btn-warning');
            button.classList.add('text-light');
        });

  




}

function wonGame() {


    setTimeout(function () {
        alert(`Team ${globalButton.innerText} Won.`);
        loadGame();
    },500);




}



function which_button(clicked_id) {
    // const button = document.getElementById(clicked_id);
    // if (button.innerText == "X" || button.innerText == "") {
    //     button.innerHTML = 'O';
    //     hLine[clicked_id] = 'O';
    //     button.classList.remove('btn-warning');
    //     button.classList.remove('btn-primary');
    //     button.classList.add('btn-danger');
    //     console.log(hLine);
    // }
    // else if (button.innerText == "O" || button.innerText == "") {
    //     button.innerHTML = 'X';
    //     hLine[clicked_id] = 'X';
    //     button.classList.remove('btn-warning');
    //     button.classList.remove('btn-danger');
    //     button.classList.add('btn-primary');
    //     console.log(hLine);
    // }

    const button = document.getElementById(clicked_id);
    if (turn % 2 == 1) {
        button.innerHTML = 'O';
        hLine[clicked_id] = 'O';
        button.classList.remove('btn-warning');
        button.classList.remove('btn-primary');
        button.classList.add('btn-danger');
        teamO.style.opacity = 0.5;
        teamX.style.opacity = 1;
        turn++;

    }
    else if (turn % 2 == 0) {
        button.innerHTML = 'X';
        hLine[clicked_id] = 'X';
        button.classList.remove('btn-warning');
        button.classList.remove('btn-danger');
        button.classList.add('btn-primary');
        teamO.style.opacity = 1;
        teamX.style.opacity = 0.5;
        turn++;
    }



    //horizontal
    if (hLine[0] == hLine[1] && hLine[2] == hLine[1]) {
        if (hLine[0] != null || hLine[1] != null || hLine[2] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
            
        }

    }
    if (hLine[3] == hLine[4] && hLine[4] == hLine[5]) {
        if (hLine[3] != null || hLine[4] != null || hLine[5] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }
    if (hLine[6] == hLine[7] && hLine[7] == hLine[8]) {
        if (hLine[6] != null || hLine[7] != null || hLine[8] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }
    }

    //vertical

    if (hLine[0] == hLine[3] && hLine[3] == hLine[6]) {
        if (hLine[0] != null || hLine[3] != null || hLine[6] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }
    if (hLine[1] == hLine[4] && hLine[4] == hLine[7]) {
        if (hLine[1] != null || hLine[4] != null || hLine[7] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }
    if (hLine[2] == hLine[5] && hLine[5] == hLine[8]) {
        if (hLine[2] != null || hLine[5] != null || hLine[8] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }
    //cross

    if (hLine[0] == hLine[4] && hLine[4] == hLine[8]) {
        if (hLine[0] != null || hLine[4] != null || hLine[8] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }
    if (hLine[2] == hLine[4] && hLine[4] == hLine[6]) {
        if (hLine[2] != null || hLine[4] != null || hLine[6] != null) {
            console.log('kazandın');
            globalButton=button;
            wonGame() 
        }

    }

}


