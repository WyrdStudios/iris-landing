/**
 * Iris Website - Component Inclusion Script
 * 
 * Loads header and footer components dynamically
 * Based on Wyrd Studios technical foundation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load header component
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        fetch('/components/header.html')
            .then(response => response.text())
            .then(html => {
                headerContainer.innerHTML = html;
                // Update theme toggle icon after header is loaded
                const currentTheme = document.documentElement.getAttribute('data-theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                updateThemeToggleIcon(currentTheme);
                
                // Set active navigation state
                setActiveNavigation();
            })
            .catch(error => {
                console.error('Error loading header:', error);
                // Fallback: create basic navigation
                headerContainer.innerHTML = `
                    <nav class="navigation">
                        <div class="nav-container">
                            <div class="brand">
                                <a href="/" class="logo">Iris</a>
                            </div>
                            <div class="nav-items">
                                <a href="/" class="nav-item">Home</a>
                                <a href="/waitlist" class="nav-item">Waitlist</a>
                            </div>
                        </div>
                    </nav>
                `;
            });
    }

    // Load footer component
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        fetch('/components/footer.html')
            .then(response => response.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                // Fallback: create basic footer
                footerContainer.innerHTML = `
                    <footer class="footer">
                        <div class="footer-container">
                            <div class="footer-section">
                                <p>&copy; 2025 Iris. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                `;
            });
    }
});
