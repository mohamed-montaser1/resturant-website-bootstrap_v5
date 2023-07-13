let landing = document.querySelector(".landing");
let footerYear = document.getElementById("footer-year");

let imageNumber = landing.dataset.imagenumber;

setInterval(changeLandingBg, 1500);

function changeLandingBg() {
  if (imageNumber == 3) {
    imageNumber = 1;
    landing.setAttribute("data-imageNumber", 1);
    return;
  }
  imageNumber++;
  landing.setAttribute("data-imageNumber", imageNumber);
}

let cardsImage = document.querySelectorAll(".card-img-top");
let layer = document.querySelector(".layer");

cardsImage.forEach((img) => {
  img.onclick = function () {
    layer.classList.remove("d-none");
    setTimeout(() => {
      layer.classList.remove("opacity-0");
    }, 100);
  };
});

layer.onclick = function (e) {
  if (!e.target.getAttribute("src")) {
    layer.classList.add("opacity-0");
    setTimeout(() => {
      layer.classList.add("d-none");
    }, 500);
  }
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

footerYear.innerHTML =
  new Date().getFullYear() === 2023 ? "" : new Date().getFullYear();
