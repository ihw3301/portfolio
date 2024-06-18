// Select the projects section
const projectsSection = document.getElementById('projects');

// Flag to track if animation is already started
let animationStarted = false;

// Function to check if an element is in viewport
function isInViewport(element, percentVisible = 60) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const height = rect.bottom - rect.top;
    const threshold = (height * percentVisible) / 100;

    return rect.top <= windowHeight - threshold;
}

// Function to animate the data-animation-step attribute
function animateStep() {
    const animationElement = document.querySelector('#projects .projects_box .animation');
    let currentStep = parseInt(animationElement.getAttribute('data-animation-step')) || 1;
    const steps = 3; // Total animation steps

    currentStep = currentStep % steps + 1; // Cycle through 1, 2, 3

    // Update data-animation-step attribute
    animationElement.setAttribute('data-animation-step', currentStep);

    // Call animateStep recursively
    setTimeout(animateStep, 5000 / steps); // Adjust the duration here if needed
}

// Function to handle scroll events
function handleScroll() {
    if (isInViewport(projectsSection, 40) && !animationStarted) {
        animationStarted = true;

        // Start the animation immediately
        animateStep();

        // Add 'animate' class to projects_desc_box
        const projectsDescBoxes = document.querySelectorAll('#projects .projects_box .projects_desc_box');
        projectsDescBoxes.forEach(box => {
            box.classList.add('animate');
        });

        // Add 'animate' class to animation element
        const animationElement = document.querySelector('#projects .projects_box .animation');
        animationElement.classList.add('animate');

        // Remove scroll event listener after animating once
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', handleScroll);
