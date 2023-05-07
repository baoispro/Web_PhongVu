window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    if(parseInt(sliderOne.value) === parseInt(sliderMaxValue)){
        sliderOne.value = parseInt(sliderMaxValue) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
    // Đoạn code giúp silde thumb có thể kéo về bên trái khi dính liền nhau
    if (parseInt(sliderOne.value) == parseInt(sliderTwo.value)) {
        sliderTwo.style.display = "none";
    } else {
        sliderTwo.style.display = "inline-block";
    }
}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}

$(document).ready(function(){
    let slider = document.getElementById("slider-1");
    let slider1 = document.getElementById("slider-2");
    let tooltip = document.getElementById("slider-tooltip");
    let isMouseDown = false;
  
    // Show tooltip on mousemove and input events
    slider.addEventListener("input", function() {
      tooltip.style.display = "block";
      tooltip.textContent = slider.value;
    });
  
    slider.addEventListener("mousemove", function(e) {
      if (isMouseDown) {
        tooltip.style.display = "block";
        tooltip.textContent = slider.value;
      }
    });
  
    // Hide tooltip on mouseup event
    slider.addEventListener("mouseup", function() {
      isMouseDown = false;
      tooltip.style.display = "none";
    });
  
    // Show tooltip on mousedown event
    slider.addEventListener("mousedown", function() {
      isMouseDown = true;
      tooltip.style.display = "block";
      tooltip.textContent = slider.value;
    });

    slider.addEventListener("mouseover",function(){
      isMouseDown = true;
      tooltip.style.display = "block";
      tooltip.textContent = slider.value;
    });

    slider.addEventListener("mouseout",function(){
      isMouseDown = false;
      tooltip.style.display = "none";
    })

    // Slide 2
     // Show tooltip on mousemove and input events
     slider1.addEventListener("input", function() {
      tooltip.style.display = "block";
      tooltip.textContent = slider1.value;
    });
  
    slider1.addEventListener("mousemove", function(e) {
      if (isMouseDown) {
        tooltip.style.display = "block";
        tooltip.textContent = slider1.value;
      }
    });
  
    // Hide tooltip on mouseup event
    slider1.addEventListener("mouseup", function() {
      isMouseDown = false;
      tooltip.style.display = "none";
    });
  
    // Show tooltip on mousedown event
    slider1.addEventListener("mousedown", function() {
      isMouseDown = true;
      tooltip.style.display = "block";
      tooltip.textContent = slider1.value;
    });

    slider1.addEventListener("mouseover",function(){
      isMouseDown = true;
      tooltip.style.display = "block";
      tooltip.textContent = slider1.value;
    });

    slider1.addEventListener("mouseout",function(){
      isMouseDown = false;
      tooltip.style.display = "none";
    })
  });
  
