// enabling dropdown clickable
const dropdownButton = document.querySelector("a.dropdown-button");
const dropdownContent = document.querySelector("div.dropdown-content");
dropdownButton.addEventListener("click", function () {
  if (dropdownContent.classList.contains("show-dropdown")) {
    dropdownContent.classList.remove("show-dropdown");
    dropdownContent.classList.add("hide-dropdown");
  }else{
    dropdownContent.classList.remove("hide-dropdown");
    dropdownContent.classList.add("show-dropdown");
  }
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropdown-part")) {
    console.log("dropdown-part didnt match")
    if(!e.target.matches(".dropdown-content")){
      console.log("dropdown-content didnt match")
      if(!e.target.matches(".dropdown-links")){
        console.log("dropdown-links didnt match")
        if (dropdownContent.classList.contains("show-dropdown")) {
          dropdownContent.classList.remove("show-dropdown");
          dropdownContent.classList.add("hide-dropdown");
        }
  }
  }
}
});

//making the nightmode switch
const toggleBtn = document.getElementById("toggle-button");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const darkThemeStylesheet = document.getElementById("dark-theme-css");
const mainQuote=document.getElementById("index-quote")
const myPic = document.querySelector("img.muiz-image");
var isDark = false;

function swapStyleSheets(sheetPath) {
  darkThemeStylesheet.setAttribute("href", sheetPath);
}

toggleBtn.addEventListener("click", function () {
  //checking for darkmode
  if (!isDark) {
    isDark = true;
    //applying darkmode
    if (isDark) {
      toggleBtn.className = "fas fa-toggle-on switch";
      sun.className = "far fa-sun sun";
      moon.className = "fas fa-moon moon";
      swapStyleSheets("styles/darktheme.css");
      if(mainQuote){
        mainQuote.className="dark-animated"
      }
      if(myPic){
        myPic.classList.toggle("darkmode-img-border");
      }
    }
  }
  //removing dark mode
  else {
    toggleBtn.className = "fas fa-toggle-off switch";
    sun.className = "fas fa-sun sun";
    moon.className = "far fa-moon moon";
    swapStyleSheets("styles/theme.css");
    if(mainQuote){
      mainQuote.className="animated"
    }
    if(myPic){
      myPic.classList.toggle("darkmode-img-border");
    }
    isDark = false;
  }
});