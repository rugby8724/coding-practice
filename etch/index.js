const gridContainer = document.querySelector('#gridcontainer')

const gridListener = () => {
  const gridColor = document.querySelectorAll('.grid-item')
  for (let i=0; i < gridColor.length; i++){
      gridColor[i].addEventListener('mouseover', function (){
          // document.querySelector(‘.grid-item’).getElementsByClassName.backgroundColor = “black”;
          gridColor[i].style.backgroundColor = 'black'
          // console.log(“I’m working!“);
      })
  }
}

const makeGrid = (divSize=32) => { // = 32 sets as default, can be overwritten.
  gridSize(divSize);
  for (let i = 0; i < divSize; i++){
      let element = document.createElement('div')
      element.classList.add('grid-item')
      for (let j = 0; j < divSize; j++){
          let elementTwo = document.createElement('div')
          const gridContainer = document.querySelector('#gridcontainer')
          gridContainer.append(elementTwo)
          elementTwo.classList.add('grid-item')
      }
  }
  gridListener()
}

const gridSize = (divSize) => {
  document.getElementById('gridcontainer').style.setProperty('grid-template-columns', 'repeat(' + divSize +', 25px)')
  document.getElementById('gridcontainer').style.setProperty('grid-template-rows','repeat(' + divSize +', 25px)')
}

makeGrid()

const gridColor = document.querySelectorAll('.grid-item')

for (let i=0; i < gridColor.length; i++){
  gridColor[i].addEventListener('mouseover', function (){
      // document.querySelector(‘.grid-item’).getElementsByClassName.backgroundColor = “black”;
      // event.target - this is considered depracated, which means that it may no longer be supported.
      gridColor[i].style.backgroundColor = 'black'
      console.log('I’m working!')
  })
}

let resetBtn = document.querySelector('#reset')
let demo = document.querySelector('#demo')

const reset = () =>{
  gridColor.forEach((e) => (gridContainer.removeChild(e)))
}

function promptUser(){
  reset()
  x = prompt('Please, specify the grid size.')
  // demo.innerText = x; //testing value for prompt
  makeGrid(x); //calls function again, takes the input from prompt
}

resetBtn.addEventListener('click', function(){
  reset()
  // location.reload(); //This cannot work because it will erase the settings.
  // reset(); same thing as line 77.
  // for (let i =0; i <gridColor.length; i++){
  //     gridColor[i].style.backgroundColor = “white”;
  // // }
  // reset();
  promptUser()
})