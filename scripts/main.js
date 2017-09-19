


var cells = document.getElementsByClassName('cell')

var brushColor="red";

var currentColor=brushColor

for(let i =0; i<cells.length; i++){
  cells[i].addEventListener('mouseover', function(event){

    event.target.classList.add(brushColor);

  if(cells[i].classList.length > 1){
    let currentClass=cells[i].classList.item(1)
  cells[i].classList.remove(currentClass)
   }
  cells[i].classList.add(brushColor)


})
}

var colors = document.getElementsByClassName('swatch')

for(let x = 0; x<colors.length; x++){
  colors[x].addEventListener('click', function(event){
    brushColor=colors[x].classList[0]

     currentColor = document.getElementsByClassName('currentColor')[0]

   if(currentColor.classList.length > 1){
     let currentClass=currentColor.classList.item(1)
   currentColor.classList.remove(currentClass)
    }
   currentColor.classList.add(brushColor)

  })

}
