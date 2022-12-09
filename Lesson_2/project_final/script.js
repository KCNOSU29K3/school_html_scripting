

// scroll to top button
window.onload = function() {

    // stuff for the scroll button
    const scrollUpButton = document.getElementById("scroll-to-top-button")
    scrollUpButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

    // adding event listener for the thing
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10){
            scrollUpButton.style.display="block"
        }
        else {
            scrollUpButton.style.display = "none"
        }
    })
}

function reveal() {
    // getting the funny animated stuff
    var reveals = document.querySelectorAll(".reveal");
  

    // looping through all items
    for (var i = 0; i < reveals.length; i++) {

      // window height
        var windowHeight = window.innerHeight;
        // top of the element that is hidden
        var elementTop = reveals[i].getBoundingClientRect().top;
        // dunno what this does
        // probably helps to indicate when it should be rendered 
		//so that it doesn't render stuff at the very bottom of the page.
        var elementVisible = 150;
      

        // if the top of the element is higher than the window height
        // subtract element visibility, render
        //else, de-render
        if (elementTop < windowHeight - elementVisible) {
            
            // this inner if statement ensures that the item de-renders when above frame.
            if (elementTop > 0) {
            reveals[i].classList.add("active");
            }
            else {
                reveals[i].classList.remove("active");
            }
        } 
        else {
            reveals[i].classList.remove("active");
        }
    }
}
  
// event listener to eval rendering elements
window.addEventListener("scroll", reveal);