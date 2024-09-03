function createDivs(numberOfDivs = 256) {
const container = document.getElementById("container");
container.innerHTML = '';

const rows = Math.ceil(Math.sqrt(numberOfDivs));
const cols = rows;

container.style.setProperty('--rows', rows);
container.style.setProperty('--cols', cols);

for (let i = 0; i < numberOfDivs; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

}
createDivs();

function color() {
const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.add('active'); 
    });

    square.addEventListener('mouseout', () => {
        
    });
});
}

function createGrid() {
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener('click', function() {
         var userInput = prompt("Insert number of squares");
         var number = Number(userInput);
         if (isNaN(number) || userInput > 100 || userInput < 2) {
            alert("Insert number between 2 and 100");
         } else {
            numberOfDivs = userInput * userInput;
            createDivs(numberOfDivs);
            color();
         }
    })
};
createGrid();
color();