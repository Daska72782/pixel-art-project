//User creating color, height and width by ID
const color = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");
const submit = document.getElementById("submit");
const width = document.getElementById("inputWidth");
const height = document.getElementById("inputHeight");
// console.log("string")

    
//User inserting rows and cells to table
function makeGrid(width, height){
    for(let m = 0; m < width; m++) {
        let myRow = table.insertRow(m);
        for(let n = 0; n < height; n++) {
            let myCell = myRow.insertCell(n);
            myCell.addEventListener("click", function(e) {
                myCell.style.backgroundColor = color.value;
                // console.log("loop")
      })
    }
  }
}
        
//Function creates a new grid to replace the old one
sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  while (table.hasChildNodes()) {
    table.removeChild(table.lastChild);  
  }
  makeGrid(height.value, width.value);
  // console.log("nodes")
});