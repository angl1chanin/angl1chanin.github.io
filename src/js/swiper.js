const swiperTestimonials = new Swiper('.swiper-testimonials', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-swiper__button_next',
        prevEl: '.testimonial-swiper__button_prev',
    },
});

const swiperWishlist = new Swiper('.swiper-wishlist', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.wishlist-swiper__button-next',
        prevEl: '.wishlist-swiper__button-prev',
    },
});

const swiperPortfolio = new Swiper('.swiper-portfolio', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Autoplay
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.portfolio-swiper__button-next',
        prevEl: '.portfolio-swiper__button-prev',
    },
});

