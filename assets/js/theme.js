// Default theme
document.body.classList.add('light-theme');

let themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('light-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.classList.add('light-theme');
        themeIcon.classList.add('fa-sun');
        themeIcon.classList.remove('fa-moon');
    }
});
