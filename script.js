//get our grid
const grid = document.querySelector('.grid');
//Grid generator function
makeGrid = () =>{
    //for loop to create the divs to fill up the grid space(16x16 = 256)
    for(let i = 0; i < 256; i++){
        //create div while loop is active
        const div = document.createElement('div');
        //add class to the divs
        div.classList.add('grid-cell');
        //forEach to add eventListeners to each div

        //add event listeners to each div cell created(to allow drawing effect)
        div.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'blue';
        })
        //append the divs to the grid container to make the grid squares
        grid.appendChild(div);
    }

}
//Call the grid
makeGrid();
