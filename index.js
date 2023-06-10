// HTML BOx JS Code
let HTMLBox = document.getElementById("HTMLBox");
let HTMLButton = document.getElementById("HTMLButton");

HTMLButton.onclick = function () {
    HTMLBox.Select();
    document.execCommand("copy");
    HTMLButton.innerText = "Codes Copied";
};

// CSS Box Js Code
let CSSBox = document.getElementById("CSSBox");
let CSSButton = document.getElementById("CSSBox");

CSSButton.onclick = function () {
    CSSBox.Select();
    document.execCommand("copy");
    CSSButton.innerText = "codes copied"
};

// Javascript Box JS Code
let JSBox = document.getElementById("JSBox");
let JSButton = document.getElementById("JSBox");

JSButton.onclick = function () {
    JSBox.Select();
    document.execCommand("copy");
    JSButton.innerText = "codes copied"
};