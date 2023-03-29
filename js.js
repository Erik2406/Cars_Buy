let header = document.getElementById("header");
let mers = document.getElementById("Mercedes-Benz");
let rolls = document.getElementById("Rolls-Royce");
let lambo = document.getElementById("Lamborghini");
let audi = document.getElementById("Audi");
let bmw = document.getElementById("BMW");
let model = document.getElementById("model")

mers.onclick = function () {
    header.style.backgroundImage = "url(img/3.jpeg)";
    model.innerHTML = "Mercedes-Benz";
}

rolls.onclick = function () {
    header.style.backgroundImage = "url(img/4.jpg)";
    model.innerHTML = "Rolls-Royce";
}

lambo.onclick = function () {
    header.style.backgroundImage = "url(img/2.webp)";
    model.innerHTML = "Lamborghini";
}

audi.onclick = function () {
    header.style.backgroundImage = "url(img/1.jpg)";
    model.innerHTML = "Audi";
}

bmw.onclick = function () {
    header.style.backgroundImage = "url(img/0.jpg)";
    model.innerHTML = "BMW";
}
// -------------------------------------------------------------------------------------------------------//
