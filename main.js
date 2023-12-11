







let tlstart = gsap.timeline();


tlstart.from("#page1 video", {
    opacity: 0,
    duration: .6,
    ease: "power2.in"
})







document.querySelector("header .menu").addEventListener('click', function () {

    let tl = gsap.timeline();


    tl.to("header", {
        top: "-100%",
        duration: .5,
        ease: "power1.in"
    })

    tl.to(".menu-show", {
        opacity: 1,
        pointerEvents: "initial",
        duration: .5,
        ease: "power.in"
    }, "<")

    tl.to(".menu-show .menu-content", {
        right: "0%",
        duration: .5,
        ease: "power2.in"
    }, "<")

    tl.from(".menu-content .content div h1", {
        y: "200%",
        duration: .3,
        ease: "power.in",
        stagger: {
            each: .2
        }
    })

    tl.to(".menu-show .menu-content button", {
        bottom: "0%",
        duration: .3,
        ease: "power.in",
    }, "<0.3")

})


document.querySelector(".menu-content .content a").addEventListener('click', function () {
    let tl2 = gsap.timeline();

    

    tl2.to(".menu-show .menu-content", {
        right: "-100%",
        duration: .5,
        ease: "power2.in"
    })

    tl2.to(".menu-show .menu-content button", {
        bottom: "-100%",
        duration: .1,
        ease: "power.out",
    })

    tl2.to(".menu-show", {
        opacity: 0,
        pointerEvents: "none",
        duration: .5,
        ease: "power.in"
    }, "<")

    tl2.to("header", {
        top: "0%",
        duration: .5,
        ease: "power1.out"
    }, "<")

    

    

})


gsap.to(".page2-images .left-image img, .page2-images .right-image img", {
    width: "100%",
    scale: 1,
    duration: .8,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 30%",
        end: "top top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})


gsap.from("#page3 .heading h1", {
    x: 350,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "top bottom",
        end: "top 50%",
        scroller: "#main",
        scrub: 1
    }
})

gsap.to(".item0", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "20% 70%",
        end: "20% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".item1", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "30% 70%",
        end: "30% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".item2", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "45% 70%",
        end: "45% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".item3", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "60% 70%",
        end: "60% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".item4", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "70% 70%",
        end: "70% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".item5", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page3",
        start: "83% 70%",
        end: "83% 30%",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".page3-right img", {
    width: "100%",
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "top 30%",
        end: "top top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})


// let tlvideo = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page4",
//         start: "top top",
//         end: "top -100%",
//         scroller: "#main",
//         scrub: 1,
//         pin: true,
//         markers: true
//     }
// })


// tlvideo.to(".page4-video", {
//     width: "100%",
//     height: "100%",
//     borderRadius: 0, 
//     duration: 1
// })

// tlvideo.from("#page4 h1", {
//     top: "200%",
//     opacity: 0,
//     duration: 2,
//     ease: "power1.out"
// }, "<.5")


// gsap.from(".bg-image", {
//     y: -300,
//     duration: .3,
//     ease: "linear",
//     scrollTrigger: {
//         trigger: "#page4",
//         start: "top 70%",
//         end: "bottom top",
//         scrub: 1,
//         scroller: "#main",
//         markers: true
//     }
// })

let items = document.querySelectorAll(".page5-right .item");

items.forEach((item) => {
    item.addEventListener('click', function () {        
        item.classList.toggle("active");
    })
})


gsap.from("#page5 h1", {
    x: 350,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        start: "top 90%",
        end: "top 40%",
        scroller: "#main",
        scrub: 1
    }
})


gsap.to(".pi1", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page5",
        start: "20% center",
        end: "20% top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".pi2", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page5",
        start: "35% center",
        end: "35% top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".pi3", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page5",
        start: "50% center",
        end: "50% top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

gsap.to(".pi4", {
    opacity: 1,
    y: 0,
    duration: .6,
    ease: "back",
    scrollTrigger: {
        trigger: "#page5",
        start: "65% center",
        end: "65% top",
        scroller: "#main",
        toggleActions: "play none none reverse"
    }
})

