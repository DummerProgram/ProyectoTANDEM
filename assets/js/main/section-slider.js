window.addEventListener('load', function(){
    new Glider(document.querySelector('.areas-list'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.areas-indicator',
        arrows: {
            prev: '.areas-prev',
            next: '.areas-next'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            }
        ]
    });
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.education-list'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.education-indicator',
        arrows: {
            prev: '.education-prev',
            next: '.education-next'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            }
        ]
    });
});

window.addEventListener('load', function(){
    new Glider(document.querySelector('.video-list'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.video-indicator',
        arrows: {
            prev: '.video-prev',
            next: '.video-next'
        },
        responsive: [
            {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            }
        ]
    });
});