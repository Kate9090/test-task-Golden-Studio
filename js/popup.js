// $(document).ready(function(){
//     PopUpHide();
// });
// function PopUpShow(){
//     $("#popup1").show();
// }
// function PopUpHide(){
//     $("#popup1").hide();
// }
//

var popupOpenLink = document.querySelector(".popup-open-link");
var popup = document.querySelector(".popup");
var popupOverlay = document.querySelector(".popup_bg");
var productBuy = document.querySelectorAll(".add-link");
var ESCAPE_KEY_CODE = 27;

if (popupOpenLink) {
  popupOpenLink.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup--show");
  });
}
popupOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
});

for (var i = 0; i < productBuy.length; i++) {
  productBuy[i].addEventListener("click", function(event) {
    event.preventDefault();
    if (popup) {
      popup.classList.add("popup--show");
    }
  });
}

var setupKeyDownHandler = function (event) {
  if (event.keyCode === ESCAPE_KEY_CODE) {
    popup.classList.remove("popup--show");
  }
};
//
document.addEventListener('keydown', function () {
  setupKeyDownHandler(event);
});
var overlay = document.querySelector(".popup__bg");
var modal = document.querySelector(".popup");
var modalButton = document.querySelector(".popup-button");
var buyButton = document.querySelectorAll(".catalog-list__basket");

if (overlay) {
for (var i = 0; i < buyButton.length; i++) buyButton[i].addEventListener("click", function(event) {
event.preventDefault();
overlay.classList.add("overlay--on");
});

overlay.addEventListener("click", function() {
overlay.classList.remove("overlay--on");
});
modal.addEventListener("click", function(event) {
event.stopPropagation();
});

modalButton.addEventListener("submit", function() {
overlay.classList.remove("overlay--on");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
overlay.classList.remove("overlay--on");
}
});
}
