const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".colorTxt");

btn.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandNum()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandNum() {
    return Math.floor(Math.random() * hex.length);
}