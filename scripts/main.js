


var cells = document.getElementsByClassName('cell')
console.log(cells)


for(let i =0; i<cells.length; i++){
  cells[i].addEventListener('click', function(event){

    event.target.style.backgroundColor='tomato'
    //console.log(cells[i])

})
}

var brushColor = document.getElementsByClassName('swatch')

for(let x = 0; x<brushColor.length; x++){
  brushColor[x].addEventListener('click', function(event){

    event.target.



  })




}
