window.onload = function () {

  navOpen();

}

function navOpen() {
  var content = document.getElementById('follow-content');
  var arrowDown = document.getElementById('down');
  var arrowUp = document.getElementById('up');

  arrowDown.addEventListener('click', function () {
    arrowDown.style.display = 'none';
    arrowUp.style.display = 'block';
    content.style.display = 'block';
  });

  arrowUp.addEventListener('click', function () {
    arrowDown.style.display = 'block';
    arrowUp.style.display = 'none';
    content.style.display = 'none';
  });

}

