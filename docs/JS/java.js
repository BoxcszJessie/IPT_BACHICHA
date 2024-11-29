document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.content').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.classList.toggle('dark-mode');
    });
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('darkModeToggle').textContent = 'Light Mode';
    } else {
        document.getElementById('darkModeToggle').textContent = 'Dark Mode';
    }
});
