$(document).ready(function() {
    $('.content-section').hide();
    $('#home').show();

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

document.querySelector('.tour-button').addEventListener('click', function() {
    document.querySelector('.tour-video').scrollIntoView({ behavior: 'smooth' });
});


$(".filter-btn-all").click(function() {
    $(".cleaning-wrapper").show();
    $(".cleaning-articles-bathroom").show();
    $(".cleaning-articles-smells").show();
    $(".homeprojects-wrapper").show();
    $(".homeprojects-articles-before").show();
    $(".homeprojects-articles-skills").show();
});
$(".filter-btn-bathroom").click(function() {
    $(".cleaning-wrapper").hide();
    $(".cleaning-articles-bathroom").show();
    $(".cleaning-articles-smells").hide();
});
$(".filter-btn-smells").click(function() {
    $(".cleaning-wrapper").hide();
    $(".cleaning-articles-bathroom").hide();
    $(".cleaning-articles-smells").show();
});
$(".filter-btn-before").click(function() {
    $(".homeprojects-wrapper").hide();
    $(".homeprojects-articles-before").show();
    $(".homeprojects-articles-skills").hide();
});
$(".filter-btn-skills").click(function() {
    $(".homeprojects-wrapper").hide();
    $(".homeprojects-articles-before").hide();
    $(".homeprojects-articles-skills").show();
});


//fungsi search container
const searchContainer = document.querySelector('.search-container');
const searchInput = searchContainer.querySelector('input[type="search"]');
const houseTours = document.querySelector('.house-tours');

searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('active');
});

searchInput.addEventListener('blur', () => {
    searchContainer.classList.remove('active');
});

// Fungsi untuk mencari konten di House Tours
function searchHouseTours() {
    const searchTerm = searchInput.value.toLowerCase();
    const houseTourCards = houseTours.querySelectorAll('.house-tour-card');

    houseTourCards.forEach((card) => {
        const cardTitle = card.querySelector('.tour-category').textContent.toLowerCase();
        const cardContent = card.querySelector('.tour-details').textContent.toLowerCase();

        if (cardTitle.includes(searchTerm) || cardContent.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Tambahkan event listener untuk mencari konten di House Tours ketika input field diisi
searchInput.addEventListener('input', searchHouseTours);

// Function to show scroll carousel (Organizing section)
function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Function to show scroll carousel (Cleaning section)
// Bathroom
function scrollCarousel1(direction) {
    const carousel = document.querySelector('.carousel1');
    const itemWidth = carousel.querySelector('.carousel-cleaning').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}
// Smells & Scents
function scrollCarousel2(direction) {
    const carousel = document.querySelector('.carousel2');
    const itemWidth = carousel.querySelector('.carousel2-cleaning').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Function to show scroll carousel (Home Projects section)
// Before
function scrollCarousel3(direction) {
    const carousel = document.querySelector('.carousel3');
    const itemWidth = carousel.querySelector('.carousel-homeprojects').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}
// Dos & Don'ts
function scrollCarousel4(direction) {
    const carousel = document.querySelector('.carousel4');
    const itemWidth = carousel.querySelector('.carousel2-homeprojects').offsetWidth + 20;
    carousel.scrollBy({
        left: direction * itemWidth,
        behavior: 'smooth'
    });
}

// Function to show selected category in Decorating section
function showCategory(categoryId) {
    var categories = document.getElementsByClassName('decorating-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none'; // Hide all categories
    }

    if (categoryId) {
        var selectedCategory = document.getElementById(categoryId);
        if (selectedCategory) {
            selectedCategory.style.display = 'block'; // Show selected category
        }
    } else {
        // Show all categories if no category is selected
        for (var i = 0; i < categories.length; i++) {
            categories[i].style.display = 'block'; // Show all categories
        }
    }
}

// Initialize the page by showing all categories
window.onload = function() {
    showCategory(); // Show all categories by default
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

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = this.getAttribute('data-target');
        if (target === '#community') {
            window.location.href = 'community.html';
        }
    });
});

