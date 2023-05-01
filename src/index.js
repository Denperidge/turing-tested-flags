let params = new URLSearchParams(window.location.search);

const flag = "lesbian";
const rectHeight = 24;

const svg = document.getElementById("output");
const inp = $("#input");

function updateParams(key, value) {
    params.set(key, value);
    history.pushState(null, "", window.location.pathname + "?" + params.toString());
}

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

function generateflag() {
    // Clear any existing flag
    svg.innerHTML = "";
    
    let letters = params.get("typers");
    inp.val(letters);


    for (let i = 0; i < letters.length; i++) {
        // Convert to lowercase, add colour based on letter
        let letter = letters[i].toLowerCase();
        svg.appendChild(rectangle(letterToColour(letter), svg.childElementCount * rectHeight));
    }
    // Expand svg height to allow for all rect elements
    svg.setAttribute("height", svg.childElementCount * rectHeight);
}

function onInput(e) {
    // Get letter by letter
    let input = e.target.value;
    updateParams("typers", input);

    generateflag();
}

inp.change(onInput).keyup(onInput);
// If on load no typers, set default to currently selected flag
if (inp.val() == "") {
    updateParams("typers", flag);
}
generateflag();
