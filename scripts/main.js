// enabling dropdown clickable
const dropdownButton = document.querySelector("li.dropdown-button");
const dropdownContent = document.querySelector("div.dropdown-content");
dropdownButton.addEventListener("click", function () {
  dropdownContent.classList.toggle("show-dropdown");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropdown-part")) {
    if (dropdownContent.classList.contains("show-dropdown")) {
      dropdownContent.classList.remove("show-dropdown");
    }
  }
});


//making the nightmode switch
const toggleBtn = document.getElementById("toggle-button");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const mainTheme=document.getElementById("style-sheet");
console.log(mainTheme);
var isDark = false;


function swapStyleSheets(sheetPath){
  mainTheme.setAttribute("href",sheetPath)
}

toggleBtn.addEventListener("click", function () {
  //checking for darkmode
  if (!isDark) {
    isDark = true;
    //applying darkmode
    if (isDark) {
      toggleBtn.className = "fas fa-toggle-on dark-mode-switch";
      sun.className = "far fa-sun dark-sun";
      moon.className = "fas fa-moon dark-moon";
      swapStyleSheets("styles/darktheme.css")
    }
  }
  //removing dark mode
  else{
    toggleBtn.className = "fas fa-toggle-off bright-mode-switch";
    sun.className = "fas fa-sun bright-sun";
    moon.className = "far fa-moon bright-moon";
    swapStyleSheets("styles/theme.css")
    isDark=false
  }
});
