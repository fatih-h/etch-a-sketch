let gridContainer = document.querySelector('.grid-container');


/* Creating multiple divs */
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {

        gridContainer.appendChild(document.createElement('div'));

    }
}
/*call for events*/
color();


/*to take data from button*/
let x = null;
/*Add event listener to retrive data from buttons*/
let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((event) => {
    event.addEventListener('click', (e) => {
        x = e.target.id;
    });
});


/* slider bar to access grid*/
let slider = document.getElementById('Slider');
slider.addEventListener('click', (e) => {
    removeAllChildNodes(gridContainer);
    document.getElementById("label").innerText = e.target.value + 'x' + e.target.value;
    for (let i = 1; i <= e.target.value; i++) {
        for (let j = 1; j <= e.target.value; j++) {

            gridContainer.appendChild(document.createElement("div"));

        }
    }
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + e.target.value + ', 1fr)');
    gridContainer.style.setProperty('grid-template-rows', 'repeat(' + e.target.value + ', 1fr)');
    color();
});

/* change to function because forEach broke the code when I remove everything */
function color() {
    /*Adding event listener to change div's bGcolor */
    Array.from(document.getElementsByClassName('grid-container')[0].children).forEach(e => {
        e.addEventListener("mouseleave", () => {
            console.log("xd");
            /* set data using x*/
            if (x == 'rainbow') {
                e.style.backgroundColor = rainbowGenerator();
            } else if (x == 'eraser') {
                e.style.backgroundColor = whiteGenerator();
            } else {

                e.style.backgroundColor = blackGenerator();
            }

        });
    });
}


/*to get white value using as an eraser*/
function whiteGenerator() {
    let white = 'fff';
    let hexColor = '#' + white;
    return hexColor
}


/* to get black value */
function blackGenerator() {
    let black = '000';
    let hexColor = '#' + black;
    return hexColor
}

/*random color Generate function return hex*/
function rainbowGenerator() {

    let hexNumber = Math.floor(Math.random() * 16777215).toString(16);
    let hexColor = '#' + hexNumber;
    return hexColor;
}


/*remove child items */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

