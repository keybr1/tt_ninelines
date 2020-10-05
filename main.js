const levelWrapper = document.getElementById("value-number");
const currentNumber = levelWrapper.innerText;
window.onload = function () {
  let inputBtns = document.querySelectorAll(".custom-checkbox");
  for (let inputBtn of inputBtns) {
    let numberInInput = document.querySelector("[data-action]");
    inputBtn.onclick = function (currentNumber) {
      if (currentNumber !== "") {
        function buttonClick(val, el, timeout, step) {
          const number600 = document
            .querySelector(".p600")
            .getAttribute("data-action");
          console.log(number600);
          let i = 0;
          (function () {
            if (i <= val) {
              setTimeout(arguments.callee, timeout);
              document.getElementById(el).innerHTML = i;
              i = i + step;
            } else {
              document.getElementById(el).innerHTML = val;
            }
          })();
        }

        buttonClick(999, "value-number", 3, 10);
      }
    };
  }
};
