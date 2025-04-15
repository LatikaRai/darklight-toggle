let icon = document.querySelector('.icon')
let flag = 0
let innerIcon = ""
let theme = document.querySelector('.theme')

function applyTheme(mode) {
  if (mode === "light") {
    icon.innerHTML = `<i class="ri-sun-fill"></i>`;
    theme.classList.remove("dark");
    theme.classList.add("light");
    flag = 1;
  } else {
    icon.innerHTML = `<i class="ri-moon-fill"></i>`;
    theme.classList.remove("light");
    theme.classList.add("dark");
    flag = 0;
  }
  localStorage.setItem("theme", mode);
}

let savedTheme = localStorage.getItem("theme") || "dark"; 
applyTheme(savedTheme);

icon.addEventListener("click", () => {
  if (flag === 0) {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }
});