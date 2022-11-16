const body = document.querySelector("body");
const toogle = document.querySelector("#dark-mode-switcher");
const logo = document.querySelector("#logo");

// toogle dark mode
let themeMode = localStorage.getItem("themeMode");
if (themeMode === "light") {
  document.body.classList.remove("dark");
} else {
  document.body.classList.add("dark");
}
function toggleDarkMode() {
  const isDark = body.classList.toggle("dark");
  changeLogo();
  if (isDark) {
    localStorage.setItem("themeMode", "dark");
  } else {
    localStorage.setItem("themeMode", "light");
  }
}

function isDarkMode() {
  return document.body.classList.contains("dark");
}

// toogle switch
toogle.addEventListener("click", toggleDarkMode);
// check if dark mode is enabled
if (isDarkMode()) {
  toogle.checked = true;
} else {
  toogle.checked = false;
}

// change logo
function changeLogo() {
  if (isDarkMode()) {
    logo.src = "images/logo_moisegui_violet_clair.png";
  } else {
    logo.src = "images/logo_MoiseGui.png";
  }
}
changeLogo();
