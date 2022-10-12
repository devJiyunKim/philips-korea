window.onload = function(){

  navOpen_Desktop();
  navOpen_Tablet_Mobile();

}

function navOpen_Desktop() {
  var content = document.getElementById('follow-content');
  var arrowDown = document.getElementById('down');
  var arrowUp = document.getElementById('up');
  var hamburger = document.getElementById('hamburger');
  var closeBtn = document.getElementById('closeBtn');

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

  hamburger.addEventListener('click', function () {
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    content.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
    content.style.display = 'none';
  });

}

function navOpen_Tablet_Mobile() {
  var hamburgerTablet = document.getElementById('hamburger-tablet');
  var closeBtnTablet = document.getElementById('closeBtn-tablet');
  var contentTablet = document.getElementById('nav-follow-content');
  var headerWrapTablet = document.getElementById('header-wrap-tablet');

  hamburgerTablet.addEventListener('click', function(){

    var subContents = document.querySelectorAll('.subContents');

    for (var i = 0; i < subContents.length; i++) {
      var content = subContents.item(i);
      content.style.display = 'none';
    }

    hamburgerTablet.style.display = 'none';
    closeBtnTablet.style.display = 'block';
    contentTablet.style.display = 'block';
    contentTablet.style.backgroundColor = '#fff';
    headerWrapTablet.style.height = '100vh';
  });

  closeBtnTablet.addEventListener('click', function(){
    hamburgerTablet.style.display = 'block';
    closeBtnTablet.style.display = 'none';
    contentTablet.style.display = 'none';
    contentTablet.style.backgroundColor = 'none';
    headerWrapTablet.style.height = '100px';
  });
}


function Open_tablet_menu(menuName, otherMenu1, otherMenu2, otherMenu3, otherMenu4, otherMenu5, otherMenu6, otherMenu7, otherMenu8, subContents){

  document.getElementById(otherMenu1).style.height = '80px';
  document.getElementById(otherMenu2).style.height = '80px';
  document.getElementById(otherMenu3).style.height = '80px';
  document.getElementById(otherMenu4).style.height = '80px';
  document.getElementById(otherMenu5).style.height = '80px';
  document.getElementById(otherMenu6).style.height = '80px';
  document.getElementById(otherMenu7).style.height = '80px';
  document.getElementById(otherMenu8).style.height = '80px';
  document.getElementById(subContents).style.display = 'block';

  menuName.style.height = 'auto';

}
