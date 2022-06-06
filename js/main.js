let chancolor = document.querySelector('.test');
let chancolor2 = document.querySelector('.test2');
let chancolor3 = document.querySelector('.test3');

chancolor.style.backgroundColor = "rgb(255, 0, 0)";
chancolor2.style.backgroundColor = "rgb(255, 191, 0)";
chancolor3.style.backgroundColor = "rgb(242, 210, 189)";

chancolor.addEventListener("click", function () {
  if (chancolor.style.backgroundColor == "rgb(255, 0, 0)") {
    chancolor.style.backgroundColor = "rgb(220, 220, 220)";
  } else if (chancolor.style.backgroundColor == "rgb(220, 220, 220)") {
    chancolor.style.backgroundColor = "rgb(255, 0, 0)";
  }
});

chancolor2.addEventListener("click", function () {
  if (chancolor2.style.backgroundColor == "rgb(255, 191, 0)") {
    chancolor2.style.backgroundColor = "rgb(220, 220, 220)";
  } else if (chancolor2.style.backgroundColor == "rgb(220, 220, 220)") {
    chancolor2.style.backgroundColor = "rgb(255, 191, 0)";
  }
});

chancolor3.addEventListener("click", function () {
  if (chancolor3.style.backgroundColor == "rgb(242, 210, 189)") {
    chancolor3.style.backgroundColor = "rgb(220, 220, 220)";
  } else if (chancolor3.style.backgroundColor == "rgb(220, 220, 220)") {
    chancolor3.style.backgroundColor = "rgb(242, 210, 189)";
  }
});