let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
const popOutElement = document.getElementById("pop-out-element");


btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    setTimeout(() => {
        popOutElement.classList.remove("result");
        popOutElement.classList.add("pop-out");
      }, 4000);
}

