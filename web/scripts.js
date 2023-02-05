const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Email is required');
    }
    
    if (email.value.length <= 2) {
        messages.push('Email must have special letters');
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ');
    }
    
});


// Slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Google Button
