/* Phần js dành cho category page */
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
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , rgb(20, 53, 195) ${percent1}% , rgb(20, 53, 195) ${percent2}%, #dadae5 ${percent2}%)`;
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
  
// Phần để ẩn/hiện các check box khi nhấn nút xem thêm
function xemThem(idDivDisappear,idXemThem){
  var checkboxes = document.querySelectorAll(idDivDisappear);
  var xemthem = document.getElementById(idXemThem);

  if(xemthem.innerText == "Xem thêm"){
    xemthem.innerText = "Rút gọn"
    for(var i =0; i<checkboxes.length;i++){
      checkboxes[i].style.display = "flex"
    }
  }
  else{
    xemthem.innerText = "Xem thêm"
    for(var i =0; i<checkboxes.length;i++){
      checkboxes[i].style.display = "none"
    }
  }
};

// ẩn luôn div lớn khi bấm vào mũi tên dropdown
function toggle(idArrow,idForm){
  var arrow = document.getElementById(idArrow);
  var form = document.getElementById(idForm);
  // Kích thước xem mũi tên có bị đảo ngược 180 độ
  var transformValue = arrow.style.transform;

  if(transformValue.includes("rotate(180deg)")){
    form.style.display = "none"
    arrow.style.transform = "rotate(0deg)"
  }
  else{
    form.style.display = "block"
    arrow.style.transform = "rotate(180deg)"
  }
}