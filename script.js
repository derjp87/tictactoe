let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) {
    if (!fields[id] && !gameOver) {                                                     //Wenn das Feld i undefiened (also leer) ist wird es als false ausgewertet und durch das "!" zu einen true (dem Gegenteil) umgewandelt. bei true und wenn wir nicht gameOver sind wird die Funktion weiter durchgeführt.
        if (currentShape == 'cross') {                                                  //Wenn currentShape aktuell cross ist
            currentShape = 'circle';                                                    //ändere es zu circle
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } else {                                                                        //ansonsten
            currentShape = 'cross';                                                     //ändere es zu cross
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        fields[id] = currentShape;                                                      //setze für das Feld mit der entsprechendenen ID im Array den Wert = currentShape
        console.log(fields);
        draw();
        checkForWin();
    }
}

function restart() {
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-button').classList.add('d-none');

    for (let i = 1; i < 8; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0.0)';
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {                                                 //Wenn das Feld an Stelle i im Array = circle ist, dann
            document.getElementById('circle-' + i).classList.remove('d-none');      //entferne dem Element mit der id "circle-i" die class d-none
        }

        if (fields[i] == 'cross') {                                                  //Wenn das Feld an Stelle i im Array = cross ist, dann
            document.getElementById('cross-' + i).classList.remove('d-none');       //entferne dem Element mit der id "cross-i" die class d-none
        }
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {      //Wenn das Feld 0 im Array gleich dem Feld 1 im Array ist UND das Feld 1 im Array gleich dem Feld 2 im Array UND dem Feld 0 im Array ist
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (winner) {
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-button').classList.remove('d-none');
        }, 1000);
    }
}
