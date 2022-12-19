
function simpleSlider (sliderid) {

    var sliderSimple = document.getElementById(sliderid);
    for (var i = 0; i < sliderSimple.children.length; i++) {
        if (i == 0) {
            sliderSimple.children[i].setAttribute('class', 'simple-slider sliders active');
        } else {
    
            sliderSimple.children[i].setAttribute('class', 'simple-slider sliders');
        }
    
        console.log(sliderSimple.children[i]);
    
    }
    dots();

    window.sliderID = sliderid;

}


// creating dots in slider 



function cureentSlide() {


}


function prevSlide() {
    var currentSlide = document.querySelector('.active');
    currentSlide.setAttribute('class', 'simple-slider sliders');

    if (currentSlide.previousElementSibling !== null) {

        currentSlide.previousElementSibling.setAttribute('class', 'simple-slider sliders active');

    } else {

        slides = document.getElementById('slides');
        sLength = slides.children.length - 1;
        slides.children[sLength].setAttribute('class', 'simple-slider sliders active');

    }

}

function nextSlider() {

    var elmt = document.querySelector('.active');
    elmt.setAttribute('class', 'simple-slider sliders');
    elementCheck = elmt.nextElementSibling.classList.contains('sliders');
    if (elmt.nextElementSibling !== null && elementCheck) {

        elmt.nextElementSibling.setAttribute('class', 'simple-slider sliders active');

    } else {

        document.getElementById('slides').children[0].setAttribute('class', 'simple-slider sliders active');

    }

}



function dots() {
    slide = document.getElementById(sliderID);
    dotOuterDiv = document.createElement("div");
    dotOuterDiv.setAttribute('class', 'dots');
    // loop for creating multipule dots 
    for (var i = 0; i < slide.children.length; i++) {


        Dots = document.createElement('a');
        Dots.setAttribute('class', 'dot-tags');

        // chanage dots color automatically according to body color

        // color =  window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        // if(color = 'rgba(0, 0, 0, 0)'){
        //         Dots.setAttribute('style','background:black')
        //     }

        dotOuterDiv.appendChild(Dots);

    }

    slide.appendChild(dotOuterDiv);


}


function slideBtns() {

           btnDiv = document.createElement('div');


}

setInterval(function () {
    nextSlider();
}, 4000);


module.exports = simpleSlider();