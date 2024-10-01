$(document).ready(function() {
    $('.content-section').hide();
    $('#house-tours').show();

    $('.menu-link').click(function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        
        $('.content-section').hide();
        $(target).show();

if (target === '#house-tours') {
    $('.latest-house-tour').show();
} else {
    $('.latest-house-tour').hide();
}
    });
});


// Swiper //
const swiper = new Swiper('.cleaning-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination with dynamic bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints for different viewports
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Function to show scroll carousel in Organizing section
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Function to show selected category in Decorating section
function showCategory(categoryId) {
    var categories = document.getElementsByClassName('decorating-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none'; // Hide semua category
    }

    var selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block'; // Nampilin category yang di pencet di button
    }
}

// Initialize the page by hiding all categories (optional) in Decorating section
window.onload = function() {
    var categories = document.getElementsByClassName('decorating-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none'; // Sembunyiin category yg ga kepilih
    }
};


// Function to show 'House Tour' filter
function filterTours(type) {
    const allTours = document.querySelectorAll('.house-tour-card');
    
    // If 'all' is selected, display all cards
    if (type === 'all') {
        allTours.forEach(tour => {
            tour.style.display = 'block';
        });
    } else {
        // Hide all tours first
        allTours.forEach(tour => {
            tour.style.display = 'none';
        });

        // Display the selected type of tours
        const selectedTours = document.querySelectorAll(`.${type}`);
        selectedTours.forEach(tour => {
            tour.style.display = 'block';
        });
    }
}

// function to handle quiz submission
function showQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("start-quiz-button").style.display = "none"; // Hide the button after clicking
}

function closeQuiz() {
    document.getElementById("quiz-container").style.display = "none"; // Hide quiz
    document.getElementById("start-quiz-button").style.display = "inline-block"; // Show the start button
}

function submitQuiz() {
    let answers = {
        minimalist: 0,
        creative: 0,
        collector: 0
    };

    // Get selected answers for each question
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q1 || !q2 || !q3) {
        document.getElementById('quiz-result').innerHTML = "Please answer all questions.";
        return;
    }

    // Count the answers
    answers[q1.value]++;
    answers[q2.value]++;
    answers[q3.value]++;

    // Determine the result
    let result = '';
    if (answers.minimalist > answers.creative && answers.minimalist > answers.collector) {
        result = "You are a Minimalist! You love clean, tidy spaces and believe less is more.";
    } else if (answers.creative > answers.minimalist && answers.creative > answers.collector) {
        result = "You have a Creative Organizing Style! You embrace a little chaos, as long as it fuels your creativity.";
    } else {
        result = "You are a Collector! You enjoy having your possessions around you, and they make your space feel lived-in.";
    }

    // Display the result
    document.getElementById('quiz-result').innerHTML = result;
}


