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
}
