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

function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20; // Adding 20px for the gap between items
    carousel.scrollBy({
        left: direction * itemWidth, // Scroll left or right based on direction (-1 for left, 1 for right)
        behavior: 'smooth' // Smooth scrolling animation
    });
}

// Function to show selected category
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

// Initialize the page by hiding all categories (optional)
window.onload = function() {
    var categories = document.getElementsByClassName('decorating-category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none'; // Sembunyiin category yg ga kepilih
    }
};
