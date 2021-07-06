let fields = [];

let currentShape = 'cross';

function fillShape(id) {
    if(currentShape == 'cross') { //Wenn currentShape aktuell cross ist
        currentShape = 'circle';  //ändere es zu circle
    } else {                      //ansonsten
        currentShape = 'cross';   //ändere es zu cross
    }
    fields[id] = currentShape;    //setze für das Feld mit der entsprechendenen ID im Array den Wert = currentShape
    console.log(fields);
    draw();
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
