


var cells = document.getElementsByClassName('cell')

var brushColor=''



for(let i =0; i<cells.length; i++){
  cells[i].addEventListener('click', function(event){

    event.target.style.backgroundColor=brushColor;
  // console.log(cells[i])

})
}

var colors = document.getElementsByClassName('swatch')

for(let x = 0; x<colors.length; x++){
  colors[x].addEventListener('click', function(event){
    brushColor=colors[x].classList[0]

  var currentColor = document.getElementsByClassName('currentColor')[0]

    currentColor.style.background=brushColor
    console.log(currentColor)
    // console.log(currentColor.background)
  })

}
