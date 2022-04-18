
// DESKTOP MENU

var showC = 0;
var showF = 0;

var btnFeatures = document.getElementById("btn_features");
btnFeatures.addEventListener('click',showFeatures,true);

var btnCompany = document.getElementById("btn_company");
btnCompany.addEventListener('click',showCompany,true);

function showCompany() {
    
    let submenu = document.getElementById("submenuC");
    
    showC = showSubmenu(btnCompany, submenu, showC);

};

function showFeatures() {
    
    let submenu = document.getElementById("submenuF");
   
    showF = showSubmenu(btnFeatures, submenu, showF);
   

};

function showSubmenu (btn, element, counter) {
    
    if (counter == 0){
        element.classList.add("show");
        btn.classList.add("arrow");
        counter = 1;
        
    }
    else {
        element.classList.remove("show");
        btn.classList.remove("arrow");
        counter = 0;
        
    }

    return counter;
    
};






// MOBILE MENU
function openMenu () {
    let menu = document.getElementById("NavMenu");
    menu.classList.remove("nav__menu");
    menu.classList.add("nav__menuOpen");
}

function closeMenu () {
    let menu = document.getElementById("NavMenu");
    menu.classList.remove("nav__menuOpen");
    menu.classList.add("nav__menu");

}