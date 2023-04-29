
const flag = "lesbian";
function letterToColour(letter) {
    return flags[flag][letter];
}
const svg = document.getElementById("output");

// Thanks to https://stackoverflow.com/a/16489845

const height = 24
function rectangle(colour, y) {
    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", 277);
    rect.setAttribute("height", height);
    rect.setAttribute("y", y)

    rect.style = "fill:" + colour + ";";
    return rect;
}
console.log(svg)

function generateflag(e) {
    svg.innerHTML = "";

    let input = e.target.value.split("");

    for (let i = 0; i < input.length; i++) {
        let letter = input[i].toLowerCase();
        svg.appendChild(rectangle(letterToColour(letter), svg.childElementCount * height));
    }
    svg.setAttribute("height", svg.childElementCount * height);
}

$("#input").change(generateflag).keyup(generateflag)