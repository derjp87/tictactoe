let fields = [];

let currentShape = 'cross';

function fillShape(id) {
    if(currentShape == 'cross') {                                                   //Wenn currentShape aktuell cross ist
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

function draw() {
    for(let i=0; i < fields.length; i++) {
        if(fields[i] == 'circle') {                                                 //Wenn das Feld an Stelle i im Array = circle ist, dann
            document.getElementById('circle-' + i).classList.remove('d-none');      //entferne dem Element mit der id "circle-i" die class d-none
        }

        if(fields[i] == 'cross') {                                                  //Wenn das Feld an Stelle i im Array = cross ist, dann
            document.getElementById('cross-' + i).classList.remove('d-none');       //entferne dem Element mit der id "cross-i" die class d-none
        }               
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {      //Wenn das Feld 0 im Array gleich dem Feld 1 im Array ist UND das Feld 1 im Array gleich dem Feld 2 im Array UND dem Feld 0 im Array ist
        winner = fields[0];
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if (winner) {
        console.log('GEWONNEN:', winner);
    }
    

}
