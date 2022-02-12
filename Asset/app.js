let container = document.getElementById('container');
let hoverBoard = document.getElementById('hover-board');
let colors = ['#3984bc', '#b41914', '#b41457', '#14b42c', '#7114b4', '#adef33', '#adef33']
let squares = 500


for(let i = 0; i < squares; i++) {
    let square = document.createElement('div');
    square.classList.add('squares');
    hoverBoard.appendChild(square);
    
    square.addEventListener('mouseover', ()=> setColor(square) );
    
    square.addEventListener('mouseout', () => removeColor(square));
}

function color() {
    return colors[Math.floor(Math.random( ) * colors.length)];
}


function setColor(element){
    let randomColor = color();
    element.style.background = randomColor;
    element.style.boxShadow = '10px 10px 2px 10px ${randomColor}, 10px 10px 10px 10px ${randomColor}'
}
function removeColor(element){
       element.style.backgroundColor = '#1d1d1d';
       element.style.boxShadow = '0 0 2px #000';
}


// square.style.boxShadow = '2px 2px 2px  ${setColor}, 0 0 2px ${setColor} ';