const flag = "lesbian";
const rectHeight = 24;

const svg = document.getElementById("output");


/**
 * 
 * @param letter: converts the given letter to a colour, based on flags.js. Case sensitive 
 * @returns CSS colour code value
 */
function letterToColour(letter) {
    return flags[flag][letter];
}

/**
 * 
 * @param colour: colour code. Any CSS-accepted value works (Hex, RGB...) 
 * @param y: Desired vertical position for the rectangle
 * @returns a rect dom element
 */
function rectangle(colour, y) {
    // Thanks to https://stackoverflow.com/a/16489845

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", 277);
    rect.setAttribute("height", rectHeight);
    rect.setAttribute("y", y)

    rect.style = "fill:" + colour + ";";
    return rect;
}

function generateflag(e) {
    // Clear any existing flag
    svg.innerHTML = "";

    // Get letter by letter
    let input = e.target.value.split("");

    for (let i = 0; i < input.length; i++) {
        // Convert to lowercase, add colour based on letter
        let letter = input[i].toLowerCase();
        svg.appendChild(rectangle(letterToColour(letter), svg.childElementCount * rectHeight));
    }
    // Expand svg height to allow for all rect elements
    svg.setAttribute("height", svg.childElementCount * rectHeight);
}

$("#input").change(generateflag).keyup(generateflag)
generateflag({target: document.getElementById("input")});
