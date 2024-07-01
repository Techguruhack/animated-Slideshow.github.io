let mySlideIndex = 1;
myShowSlides(mySlideIndex);

function myChangeSlide(myNumber) {
    myShowSlides(mySlideIndex += myNumber);
}

function myCurrentSlide(myNumber) {
    myShowSlides(mySlideIndex = myNumber);
}

function myShowSlides(myNumber) {
    let mySlides = document.getElementsByClassName("mySlide");
    let myDots = document.getElementsByClassName("myDot");
    if (myNumber > mySlides.length) {mySlideIndex = 1}    
    if (myNumber < 1) {mySlideIndex = mySlides.length}
    for (let myI = 0; myI < mySlides.length; myI++) {
        mySlides[myI].style.display = "none";  
    }
    for (let myI = 0; myI < myDots.length; myI++) {
        myDots[myI].className = myDots[myI].className.replace(" myActive", "");
    }
    mySlides[mySlideIndex-1].style.display = "block";  
    myDots[mySlideIndex-1].className += " myActive";
}
