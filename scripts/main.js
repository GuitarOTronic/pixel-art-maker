


var cells = document.getElementsByClassName('cell')
console.log(cells)


for(let i =0; i<cells.length; i++){
cells[i].addEventListener('click', function(event){

  event.target.style.color='tomato'


})
}
