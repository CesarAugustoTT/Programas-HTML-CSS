let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    const images = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

/*Orientação*/
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});


document.addEventListener('DOMContentLoaded', function() {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        var question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            item.classList.toggle('open');
        });
    });
});


document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});
