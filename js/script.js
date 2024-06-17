
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener ('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.brand-item').owlCarousel({
    items:6,
    loop:true,
    smartSpeed: 1000,
    autoplay:true,
    dots:false,
    autoplayHoverPause:false,
    responsive:{
            0:{
                items:2
            },
            415:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    
    
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    $('.testim-isi').owlCarousel({
        stagePadding: 5,
        item: 1,
        loop: false,
        margin: 5,
        nav: true,
        
        responsive:{
                0:{
                    items:1
                },
                415:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        });
        
        
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[1000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })

        // product
        // sidebar

