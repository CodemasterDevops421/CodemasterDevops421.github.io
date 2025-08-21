// Dark/Light mode toggle with localStorage persistence
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

function setTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
    icon.innerHTML = '<path d="M12 3.1A9 9 0 1120.9 12 7 7 0 0012 3.1z" />';
  } else {
    root.classList.remove('dark');
    icon.innerHTML = '<path d="M12 4.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" />';
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme on page load
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(stored ? stored : prefersDark ? 'dark' : 'light');
})();

// Toggle theme on button click
if (toggle) {
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  });
}

// Update footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
