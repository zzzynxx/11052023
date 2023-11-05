
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementsByClassName("controls");
    for (let i = 0; i < container.length; i++) {
        container[i].addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("add")) {
            const numberDisplay = target.nextElementSibling;
            let count = parseInt(numberDisplay.textContent);
            count += 1;
            numberDisplay.textContent = count;
        } else if (target.classList.contains("minus")) {
            const numberDisplay = target.nextElementSibling.nextElementSibling;
            let count = parseInt(numberDisplay.textContent);
            count -= 1;
            if (count < 0){
              count +=1;
            }
            numberDisplay.textContent = count;   
        }
        });
    }
})

document.addEventListener("DOMContentLoaded", function() {
    const stickyElements = document.querySelectorAll(".sticky-element");
    let currentStickyElement = null;
  
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
  
      for (let i = stickyElements.length - 1; i >= 0; i--) {
        const stickyElement = stickyElements[i];
        const elementOffsetTop = stickyElement.offsetTop;
  
        if (scrollPosition >= elementOffsetTop) {
          if (currentStickyElement !== stickyElement) {
            // Replace the current sticky element
            if (currentStickyElement) {
              currentStickyElement.classList.remove("hidden");
            }
            currentStickyElement = stickyElement;
            currentStickyElement.classList.add("hidden");
          }
          break;
        }
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  function transition() {
    let in_cart = document.getElementById("in-cart-list");
    if (!in_cart.classList.contains("transition-out")) {
        in_cart.classList.add("transition-out");
    }else {
        in_cart.classList.remove("transition-out");
    }
    
  }
  $('.cart-image-wrapper').on("click", transition)

  function switchPage() {
    let check = document.getElementById("check");
    let menu = document.getElementById("menu");
    let confirm_list = document.getElementById("confirm-list");
    let ul = document.getElementById("in-cart-list");
    if (!check.classList.contains("display-flex")) {
        check.classList.add("display-flex");
        menu.classList.add("display-none");
        ul.classList.remove('display-none')
        confirm_list.innerHTML = ul.innerHTML
        confirm_list.classList.add("display-flex");
    }else {
        confirm_list.classList.remove("display-flex");
        ul.classList.remove('display-flex')
        menu.classList.remove("display-none");
        check.classList.remove("display-flex");
        confirm_list.innerHTML = ul.innerHTML
    }
    
  }

  $('.cart button').on("click", switchPage)
  $('#check button').on("click", switchPage)