/**
 * Iris Website - Main JavaScript Functionality
 * 
 * Based on Wyrd Studios technical foundation
 * Copyright (c) 2025 Iris. All rights reserved.
 */

// Archetype responses for the demo
const archetypeResponses = {
    planner: `Here's your structured weekend art exploration plan for Alberta Arts District:

• Friday 6-8pm: Guardino Gallery - Contemporary Pacific Northwest artists
• Saturday 10am-12pm: Alberta Street Gallery - Local emerging artists
• Saturday 2-4pm: Antler Gallery - Nature-inspired contemporary works
• Sunday 11am-1pm: Blackfish Gallery - Established Portland artists

Each location is within walking distance on Alberta Street. I've included nearby cafes like Extracto Coffee and Case Study Coffee for breaks, with optimal walking routes mapped out.`,

    explorer: `What if we completely reimagined your art weekend in Alberta? Instead of traditional galleries, what about:

• Street art walking tour along Alberta Street's murals and installations
• Artist studio visits at the Alberta Street Studios collective
• Pop-up installations at the Last Thursday street fair (if it's the last Thursday)
• Interactive art experiences at the Alberta Rose Theatre

Let's challenge the typical gallery experience and discover art in ways that might surprise you. The Alberta Arts District is known for its creative energy - what sounds most intriguing?`,

    guide: `Here's a comprehensive overview of Alberta Arts District opportunities:

• 8 galleries within 1 mile on Alberta Street, ranging from contemporary to folk art
• 3 artist collectives: Alberta Street Studios, North Portland Arts Collective, and the Alberta Street Gallery cooperative
• 2 performance venues: Alberta Rose Theatre and the Alberta Street Pub (live music)
• 5 cafes known for supporting local artists: Extracto Coffee, Case Study Coffee, Random Order Coffee, and more
• Historical context: Alberta Street has been Portland's arts hub since the 1990s, with the Last Thursday street fair starting in 1997

I can provide detailed information about any of these options, including current exhibitions, artist backgrounds, and visitor reviews.`
};

// Theme Management Functions
function detectAndApplyTheme() {
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPreference) {
        applyTheme(userPreference);
    } else {
        applyTheme(systemPreference ? 'dark' : 'light');
    }
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggleIcon(newTheme);
}

function updateThemeToggleIcon(theme) {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
        toggleButton.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        toggleButton.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
}

// Listen for system theme changes
function setupSystemThemeListener() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    darkModeMediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            updateThemeToggleIcon(newTheme);
        }
    });
}

// Initialize theme and event listeners
document.addEventListener('DOMContentLoaded', () => {
    detectAndApplyTheme();
    setupSystemThemeListener();
    setupMobileMenuClickOutside();
    
    // Set active navigation state based on current page
    setTimeout(() => {
        setActiveNavigation();
    }, 100);
    
    // Initialize archetype demo if present
    initializeArchetypeDemo();
});

// Function to set active navigation state
function setActiveNavigation() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-item');
    const mobileWaitlistBtn = document.querySelector('.mobile-waitlist-btn');
    
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Remove active state from mobile waitlist button
    if (mobileWaitlistBtn) {
        mobileWaitlistBtn.classList.remove('active');
    }
    
    let activeNavItem;
    let activeMobileWaitlistBtn = null;
    
    if (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/')) {
        activeNavItem = document.querySelector('.nav-item[href="/"]');
    } else if (currentPath.includes('waitlist')) {
        activeNavItem = document.querySelector('.nav-item[href="/waitlist"]');
        activeMobileWaitlistBtn = mobileWaitlistBtn;
    }
    
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    if (activeMobileWaitlistBtn) {
        activeMobileWaitlistBtn.classList.add('active');
    }
}

// Mobile Navigation Functions
function toggleMobileMenu() {
    const navItems = document.querySelector('.nav-items');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (navItems && mobileToggle) {
        const isActive = navItems.classList.contains('active');
        
        if (isActive) {
            // Close menu
            navItems.classList.remove('active');
            mobileToggle.classList.remove('active');
        } else {
            // Open menu
            navItems.style.display = 'flex';
            // Force reflow to ensure display is set before adding active class
            navItems.offsetHeight;
            navItems.classList.add('active');
            mobileToggle.classList.add('active');
        }
    }
}

function closeMobileMenu() {
    const navItems = document.querySelector('.nav-items');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (navItems && mobileToggle) {
        navItems.classList.remove('active');
        mobileToggle.classList.remove('active');
        
        // Hide the menu after transition completes
        setTimeout(() => {
            if (!navItems.classList.contains('active')) {
                navItems.style.display = 'none';
            }
        }, 300); // Match the CSS transition duration
    }
}

// Setup click outside to close mobile menu
function setupMobileMenuClickOutside() {
    document.addEventListener('click', (event) => {
        const navItems = document.querySelector('.nav-items');
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const navContainer = document.querySelector('.nav-container');
        
        if (navItems && navItems.classList.contains('active') && 
            navContainer && !navContainer.contains(event.target)) {
            closeMobileMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// Archetype Demo Functions
function initializeArchetypeDemo() {
    const archetypeButtons = document.querySelectorAll('.archetype-button');
    const responseText = document.getElementById('response-text');
    
    if (archetypeButtons.length > 0 && responseText) {
        archetypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                archetypeButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update response text
                const mode = button.getAttribute('data-mode');
                if (archetypeResponses[mode]) {
                    responseText.textContent = archetypeResponses[mode];
                }
            });
        });
    }
}


// Copy email to clipboard
function copyEmail() {
    const email = 'contact@meplusiris.com';
    navigator.clipboard.writeText(email).then(() => {
        const copyBtn = document.querySelector('.email-copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#D4A017';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const copyBtn = document.querySelector('.email-copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#34D399';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', () => {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
});

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Global event listeners for theme toggle (attached when component loads)
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('theme-toggle')) {
        toggleTheme();
        // Remove focus from button after click to prevent it from staying selected
        event.target.blur();
    }
});
