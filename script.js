document.addEventListener('DOMContentLoaded', function() {
    // Load Bootstrap JavaScript dynamically
    const bootstrapScript = document.createElement('script');
    
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.integrity = 'sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4';
    bootstrapScript.crossOrigin = 'anonymous';
    
    document.head.appendChild(bootstrapScript);

    // Apply the user's preference from localStorage
    const body = document.body;
    const theme = localStorage.getItem('theme') || 'dark';
    body.classList.add(theme + '-mode');

    // Update icon based on current theme
    const themeIcon = document.getElementById('themeIcon');
    if (theme) {
        themeIcon.classList.add(theme === 'dark' ? 'bi-sun' : 'bi-moon');
    }

    // Toggle dark mode
    const toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            // Toggle classes
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            // Update icon based on new theme
            const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            themeIcon.classList.toggle('bi-moon');
            themeIcon.classList.toggle('bi-sun');
            console.log(`Theme switched to: ${newTheme}`); // Debugging
        });
    } else {
        console.error('Dark mode toggle button not found'); // Debugging
    }
});
