document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");

  container.addEventListener("click", function(event) {
    const target = event.target;
    const numberDisplay = target.parentNode.previousElementSibling;

    if (target.classList.contains("incrementButton")) {
      let count = parseInt(numberDisplay.textContent);
      count += 1;
      numberDisplay.textContent = count;
    } else if (target.classList.contains("decrementButton")) {
      let count = parseInt(numberDisplay.textContent);
      count -= 1;
      numberDisplay.textContent = count;
    }
  });
});