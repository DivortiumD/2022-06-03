let chancolor = document.querySelector('.test');
let chancolor2 = document.querySelector('.test2');
let chancolor3 = document.querySelector('.test3');

chancolor.addEventListener('click', function () {
 
  if (chancolor.style.backgroundcolor === 'rgb(255, 0, 0)') {
    chancolor.style.backgroundcolor === 'rgb(220, 220, 220)';
  }
  else if (chancolor.style.backgroundcolor === 'rgb(220, 220, 220)') {
    chancolor.style.backgroundcolor === 'rgb(255, 0, 0)';
  }

});

