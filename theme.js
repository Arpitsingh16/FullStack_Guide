const selector = document.getElementById("themeSelector");

const THEMES = [
  "green",
  "blue",
  "purple",
  "orange",
  "dark"
];

function applyTheme(theme) {
  document.body.classList.remove(
    ...THEMES.map(t => `theme-${t}`)
  );

  document.body.classList.add(`theme-${theme}`);

  localStorage.setItem("roadmap_theme", theme);
}

const savedTheme =
  localStorage.getItem("roadmap_theme") || "green";

applyTheme(savedTheme);

selector.value = savedTheme;

selector.addEventListener("change", (e) => {
  applyTheme(e.target.value);
});