// Select the projects section
const projectsSection2 = document.getElementById('projects2');

// Flag to track if animation is already started
let animationStarted2 = false;

// Function to check if an element is in viewport
function isInViewport2(element, percentVisible = 60) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const height = rect.bottom - rect.top;
    const threshold = (height * percentVisible) / 100;

    return rect.top <= windowHeight - threshold;
}

// Function to animate the data-animation-step attribute
function animateStep2() {
    const animationElement = document.querySelector('#projects2 .projects_box .animation');
    const currentStep = parseInt(animationElement.getAttribute('data-animation-step')) || 1;
    const steps2 = 3; // Total animation steps

    // Update data-animation-step attribute
    animationElement.setAttribute('data-animation-step', currentStep % steps2 + 1);

    // Call animateStep2 recursively
    setTimeout(animateStep2, 5000 / steps2); // Adjust the duration here if needed
}

// Function to handle scroll events
function handleScroll2() {
    if (isInViewport2(projectsSection2, 40) && !animationStarted2) {
        animationStarted2 = true;

        // Start the animation immediately
        animateStep2();

        // Add 'animate' class to projects_desc_box
        const projectsDescBoxes2 = document.querySelectorAll('#projects2 .projects_box .projects_desc_box');
        projectsDescBoxes2.forEach(box => {
            box.classList.add('animate');
        });

        // Add 'animate' class to animation element
        const animationElement2 = document.querySelector('#projects2 .projects_box .animation');
        animationElement2.classList.add('animate');

        // Remove scroll event listener after animating once
        window.removeEventListener('scroll', handleScroll2);
    }
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', handleScroll2);
