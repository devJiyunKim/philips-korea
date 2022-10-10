window.onload = function () {

  navOpen();

  submenuOpen('li_sound_and_vision', 'div_sound_and_vision');
  submenuOpen('li_personalcare', 'div_personalcare');
  submenuOpen('li_babycare', 'div_babycare');
  submenuOpen('li_house', 'div_house');
  submenuOpen('li_light', 'div_light');
  submenuOpen('li_healthcare', 'div_healthcare');
  submenuOpen('li_car', 'div_car');
  submenuOpen('li_acc', 'div_acc');
  submenuOpen('li_event', 'div_event');

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

function submenuOpen(menuName, menuContent) {
  var menu = document.getElementById(menuName);
  var content = document.getElementById(menuContent);

  menu.addEventListener('mouseover', function () {
    content.style.display = 'block';
  });
  menu.addEventListener('mouseout', function () {
    content.style.display = 'none';
  });
}